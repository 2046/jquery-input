(function($, window, undefined){
  var ev, oldValFn;

  // Thanks :
  // http://www.cnblogs.com/rubylouvre/archive/2013/02/17/2914604.html
  // https://developer.mozilla.org/zh-CN/docs/DOM/window.oninput
  // http://msdn.microsoft.com/en-us/library/ie/ms536956(v=vs.85).aspx
  // http://stackoverflow.com/questions/15516218/how-to-handle-undo-redo-event-in-javascript

  ev = {
    z : 90,
    del : 46,
    backspace : 8
  };
  oldValFn = $.fn.val;

  $.fn.val = function(){
    var val = oldValFn.apply(this, arguments);

    if(arguments.length === 1 && window.addEventListener){
      if(!('\v' == 'v')){ //IE8-
        this.trigger('onInputChangeValue');
      }
    }

    return val;
  };

  $.fn.input = function(callback){
    callback = callback || $.noop;

    return this.each(function(){
      var $el = $(this);

      $el.on('input onInputChangeValue', function(e){
        callback.call($el);
      });

      if(window.attachEvent && !window.addEventListener){
        $el.on('propertychange', function(){
          if(window.event.propertyName === 'value'){
            callFn();
          }
        });
      }

      //fixed IE9 backspace, delete, ctrl-z, contextmenu -> undo cut paste delete event
      if(window.addEventListener && !window.atob){
        $el.on('keydown', function(e){
          var key = e.keyCode;

          if(key === ev.backspace || key === ev.del || (key === ev.z && e.ctrlKey)){
            callFn();
          }
        });

        $el.on('cut contextmenu', function(){
          callFn();
        });
      }

      function callFn(){
        setTimeout(function(){
          callback.call($el);
        }, 1);
      };
    });
  };
})(jQuery, window);

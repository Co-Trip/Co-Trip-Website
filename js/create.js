/**
 * 
 * @authors Tom Hu (h1994st@gmail.com)
 * @date    2014-02-28 21:22:06
 * @version 1.0
 */

/*
 * Date Format Ex
 * --------------------------------------------------
 */
Date.prototype.format = function(format) //author: meizz 
{ 
  var o = { 
    "M+" : this.getMonth()+1, //month 
    "d+" : this.getDate(),    //day 
    "h+" : this.getHours(),   //hour 
    "m+" : this.getMinutes(), //minute 
    "s+" : this.getSeconds(), //second 
    "q+" : Math.floor((this.getMonth()+3)/3),  //quarter 
    "S" : this.getMilliseconds() //millisecond 
  } 
  if(/(y+)/.test(format)) format=format.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length)); 
  for(var k in o) if(new RegExp("("+ k +")").test(format)) format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
  return format; 
}

/*
 * Datetimepicker init
 * --------------------------------------------------
 */
$('.form_date').datetimepicker({
    language:  'zh-CN',
    weekStart: 1,
    todayBtn:  1,
    autoclose: 1,
    todayHighlight: 1,
    startView: 2,
    minView: 2,
    forceParse: 0,
    startDate: new Date().format('yyyy-MM-dd')
});

/*
 * Form Validator
 * --------------------------------------------------
 */
$(document).ready(function() {
    $('#plan-form').bootstrapValidator({
        live: 'submitted',
        message: 'sdfasdf',
        submitButtons: '#plan-submit-button',
        fields: {
            title: {
                message: 'The title is not valid',
                validators: {
                    notEmpty: {
                        message: 'The title is required and can\'t be empty'
                    }, 
                    regexp: {
                        regexp: /^[a-zA-Z0-9_\.]+$/,
                        message: 'The username can only consist of alphabetical, number, dot and underscore'
                    }
                }
            },
            home_city: {
                validators: {
                    notEmpty: {
                        message: 'Your home city is required and can\' be empty'
                    }
                }
            },
            destination_city: {
                validators: {
                    notEmpty: {
                        message: 'Your destination city is required and can\' be empty'
                    }
                }
            },
            leaving_date: {
                validators: {
                    notEmpty: {
                        message: 'Your leaving date is required and can\' be empty'
                    },
                    callback: {
                        message: 'fxxxxk',
                        callback: function(value, calidator) {
                            console.log('leaving date validating');
                            return value >= (new Date()).format('yyyy-MM-dd');
                        }
                    }
                        
                }
            },
            leaving_transportation: {
                validators: {
                    notEmpty: {
                        message: 'Your leaving transportation is required and can\' be empty'
                    }
                }
            },
            return_date: {
                validators: {
                    notEmpty: {
                        message: 'Your return date is required and can\' be empty'
                    },
                    callback: {
                        message: 'Your return date must be smaller than yourn leaving date',
                        callback: function(value, calidator) {
                            return value >= $('[name="leaving_date"]').val();
                        }
                    }
                }
            },
            return_transportation: {
                validators: {
                    notEmpty: {
                        message: 'Your return transportation is required and can\' be empty'
                    }
                }
            },
            participants_number: {

            },
            participants: {

            },
            participants_can_edit: {

            },
            is_public: {

            }
        }
    });
}); 
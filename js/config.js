var serverUrl = 'http://chaiyv.cn/kh/ljy'

function getParameter(el) {
  var obj = {};
  $(el).each(function (index, item) {
    if (item.type == "text") {
      obj[$(this).attr("name")] = $(this).val();
    }
  });
  return obj;
}
var serverUrl = "http://chaiyv.cn/kh/ljy";

function getParameter(el) {
  var obj = {};
  $(el).each(function (index, item) {
    if (item.type == "text") {
      obj[$(this).attr("name")] = $(this).val();
    }
  });
  return obj;
}

const ENUM = {
  xsxm: "xsxm",
  xsbh: "xsbh",
  csjm: "csjm",
  szzb: "szzb",
  xsjg: "xsjg",
  shjx: "shjx",
  sfjj: "sfjj",
  wcfs: "wcfs",
  bxfs: "bxfs",
  zfs: "zfs",
};

const ENUM_TEXT = {
  [ENUM.xsxm]: "选手姓名",
  [ENUM.xsbh]: "选手编号",
  [ENUM.csjm]: "参赛节目",
  [ENUM.szzb]: "所在组别",
  [ENUM.xsjg]: "选送机构",
  [ENUM.shjx]: "所获奖项",
  [ENUM.sfjj]: "是否晋级",
  [ENUM.wcfs]: "作品完成度分数",
  [ENUM.bxfs]: "艺术表现力分数",
  [ENUM.zfs]: "总分",
};

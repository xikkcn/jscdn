document.write(unescape("%3Cscript src='https://p.yiqifa.com/js/juejinliannew.js' type='text/javascript'%3E%3C/script%3E"));
document.write(unescape("%3Cscript src='https://p.yiqifa.com/jj?_jjl.js' type='text/javascript'%3E%3C/script%3E"));

// Initialize JueJinLian and Yiqifa
try {
  var siteId = 975340;
  document.write(unescape("%3Cscript src='https://p.yiqifa.com/jj?type=0&sid=" + siteId + "&_jjl.js' type='text/javascript'%3E%3C/script%3E"));
  document.write(unescape("%3Cscript src='https://p.yiqifa.com/jj?type=1&sid=" + siteId + "&_jjl.js' type='text/javascript'%3E%3C/script%3E"));
  
  var jjl = JueJinLian._init();
  jjl._addWid(siteId);
  jjl._addE("");
  jjl._addR("https://tb.jiuxinban.com");
  jjl._run();
} catch (e) {}

# mediarules-bootstrap
Mixins for comforatble using media rules (using Twitter Bootstrap's less variables)<br>
Mobile first oriented

<h3>What it is</h3>

This is a little kit for comfortable using media rules. It is specifically targeted to Mobile first.<br>
100% compatible with Twitter Bootstrap ver.3.0.1 and more new. 

<h3>How to use </h3>

This little kit of mixins is very simple to use. Just copy content of file "media-rule.less" to your file with mixins or add this to "mixins.less" in Twitter Bootstrap source.

<h4>LESS</h4>
<pre>
header{
  color: red;
  
  .xs({
    color: green;
  });
  
  .sm({
    color: yellow;
  });
  
  .md({
    color: blue;
  });
  
  .lg({
    color: white;
  });
}
</pre>

<h4>CSS (compiled)</h4>
<pre>
header {
  color: red;
}
@media screen and (min-width: 480px) {
  header {
    color: green;
  }
}
@media screen and (min-width: 768px) {
  header {
    color: yellow;
  }
}
@media screen and (min-width: 992px) {
  header {
    color: blue;
  }
}
@media screen and (min-width: 1200px) {
  header {
    color: white;
  }
}

</pre>

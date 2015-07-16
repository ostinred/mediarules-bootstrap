# mediarules-bootstrap
Mixins for comforatble using media rules (using Twitter Bootstrap's less variables)<br>
Mobile first oriented

## Bower install

```
$ bower install mediarules-bootstrap
```

### What it is

This is a little kit for comfortable using media rules. It is specifically targeted to Mobile first.<br>
100% compatible with Twitter Bootstrap 3. 

### How to use

This little kit of mixins is very simple to use. Just copy content of file "media-rule.less" to your file with mixins or add this to "mixins.less" in Twitter Bootstrap source.

#### Mobile first

##### LESS
```
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
```

#### CSS (compiled)
```
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
```

#### Max width

##### LESS
```
header{
  color: red;
  
  .max-xs({
    color: blue;
  });
  
  .max-lg({
    color: white;
  })
}
```

#### CSS (compiled)
```
header {
  color: red;
}
@media screen and (max-width: 480px) {
  header {
    color: blue;
  }
}
@media screen and (max-width: 1200px) {
  header {
    color: white;
  }
}
```

#### In-between

##### LESS
```
header{
  color: red;
  
  .xs-sm({
    color: blue;
  });
  
  .sm-lg({
    color: white;
  })
}
```

#### CSS (compiled)
```
header {
  color: red;
}
@media (min-width: 480px) and (max-width: 768px) {
  header {
    color: blue;
  }
}
@media (min-width: 768px) and (max-width: 1200px) {
  header {
    color: white;
  }
}
```
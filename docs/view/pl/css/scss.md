# scss

###  变量

```scss
$gc: red;
$fs: 16px;

button {
  background-color: $gc;
  font-size: $fs;
}
```

### 混入

```css
@mixin br($radius: 4px) {
  border-radius: $radius;
}

.button {
  @include br();
}

.button--large {
  @include br(8px);
}

```

### 继承

```css
.error {
  color: red;
}

.input-error {
  @extend .error;
  border-color: red;
}
```


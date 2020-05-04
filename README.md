# README.md 

```css
@media print
{    
    .no-print, .no-print *
    {
        display: none !important;
    }
}

@media print{@page {size: landscape}}

@page { size : portrait }
@page rotated { size : landscape }

<style type="text/css" media="print">
    @page {
        size: landscape;
    }
    body {
        writing-mode: tb-rl;
    }
</style>

@page {
  size: A4 landscape;
}

/* Size in mm */    
@page {
  size: 100mm 200mm landscape;
}

/* Size in inches */    
@page {
  size: 4in 6in landscape;
}
```

### UPDATE 17.00 04-05-2020

If you click on this image, Class **.no-print** change to **.print** and the image will appear on the printscreen:

```html
<img class='door no-print remove' src='images/frame_a/gif/door.gif'>

```

```jsx
$(document).ready(function(){
 $(".door").click(function(){
    $(this).closest(".remove").removeClass("no-print").addClass('print');
 });
});
```

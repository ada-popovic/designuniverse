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

// const options = {
//   margin: 0.3,
//   filename: 'CMULF-Registration.pdf',
//   image: { 
//     type: 'jpeg', 
//     quality: 100
//   },
//   html2canvas: { 
//     scale: 1 
//   },
//   jsPDF: { 
//     unit: 'in', 
//     format: 'Leagal', 
//     orientation: 'portrait' 
//   }
// }

jQuery('.btn-download').click(function(e){
  e.preventDefault();
  const element = document.getElementById('demo');
  // html2pdf().from(element).set(options).save();
  var mode ='specify';// document.getElementById('mode').value;
  var pagebreak = (mode === 'specify') ?
      { mode: '', before: '.before', after: '.after', avoid: '.avoid' } :
  { mode: mode };
  // Generate the PDF.
  html2pdf(element, {
    margin:       10,
    filename:     'CMULF-Registration.pdf',
 
    image:        { type: 'jpeg', quality: 0.98 },
    html2canvas:  { scale: 2, logging: false, dpi: 192, letterRendering: true },
    jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
  });
});

// jQuery('.btn-download').click(function(e){
//   // Get the element.
//   var element = document.getElementById('demo');
//   // Choose pagebreak options based on mode.
//   var mode ='specify';// document.getElementById('mode').value;
//   var pagebreak = (mode === 'specify') ?
//       { mode: '', before: '.before', after: '.after', avoid: '.avoid' } :
//   { mode: mode };
//   // Generate the PDF.
//   html2pdf().from(element).set({
//     margin:5,
//     filename: 'CMULF-Registration.pdf',
//     pagebreak: pagebreak,
//     jsPDF: {orientation: 'portrait', unit: 'in', format: 'a4', compressPDF: false}
//   }).save();
// }
// );
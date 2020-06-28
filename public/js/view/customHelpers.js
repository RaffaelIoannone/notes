Handlebars.registerHelper('formatDate', function(dateString){
  const date = new Date(dateString);
  return `${date.getDate()}.${date.getMonth() +1}.${date.getFullYear()}`;
});

Handlebars.registerHelper('times', function(n, block) {
  let accum = '';
  for(let i = 0; i < n; ++i) {
    accum += block.fn(i);
  }
  return accum;
});

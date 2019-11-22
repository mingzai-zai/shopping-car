// console.log(location);

/* $(() => {
  let id = location.search.substring(4);

  phoneData.forEach(e => {
    if (e.pID == id) {
      //   console.log(1);
      $(".summary-price em").text("¥" + e.price);
      $(".sku-name").text(e.name);
      $(".preview-img img").attr("src", e.imgSrc);
    }
  });
}); */

// console.log(location.search);
$(() => {
  let id = location.search.substring(4);

  let target = phoneData.find(e => {
    return e.pID == id;
  });
  //   console.log(target);
  $(".summary-price em").text(`¥${target.price}`);
  $(".sku-name").text(target.name);
  $(".preview-img img").attr("src", target.imgSrc);
});

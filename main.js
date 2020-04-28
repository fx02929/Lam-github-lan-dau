//bộ quản lý sự kiện cơ bản của Jquery được kích hoạt khi tài liệu html của trang web được load xong và cây DOM được tạo thành
$(document).ready(() => {
  //đưa chuột vào chữ menu sẽ trượt xuống
  $(".menu").mouseenter(function(){
      $(".nav-menu").slideDown(1000);
  });
  //khi chuột đưa ra khỏi chữ menu thì nó sẽ trượt sang ngang và biến mất
  $(".menu").mouseleave(function(){
    $(".nav-menu").hide(1000);
  });
  //khi di chuyển chuột tới +1 và nhấp vào sẽ thêm class 'btn-hover'
  $(".btn").mousedown(function(event){
    $(event.currentTarget).addClass("btn-hover");
  });
  //khi di chuyển chuột qua chỗ khác thì sẽ xóa bỏ class 'btn-hover' 
  $(".btn").mouseleave(function(){
    $(".btn").removeClass("btn-hover");
  });
  // hướng tới ô để nhập dữ liệu
  $(".postText").focus();

  // Khi người dùng nhập quá 140 kí tự sẽ thay đổi sang màu đỏ

  //bắt đầu sự kiện ,kích hoạt sự kiện keyup lên một thành phần.
  $(".postText").on("keyup", function(event){
    //lấy ra phần tử đang đc nhập
    var post = $(event.currentTarget).val();
    //set text vào phần tử html có class là characters 
    var remaining = 140 - post.length;
    //check xem là đoạn nhập đó đã lớn hơn 140 kí tự chưa nếu lớn hơn thì addClass red vào phần tử html đó nếu chưa thì removeClass nó
    $(".characters").html(remaining);
    if (remaining <= 0) {
      $(".wordcount").addClass("red");
    } else {
      $(".wordcount").removeClass("red");
    }
    });
});

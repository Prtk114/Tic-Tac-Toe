$(document).ready(function() {
    var p = '';
    var q = '';


    $(".startbtn").on("click", function() {
        p = $(".p1").val();
        $(".players").html(p + "'s Move");
        q = $(".p2").val();
        $(".overlay").css("display", "none");
        $(".main").fadeIn(2000).css("display", "block");
    });
    var x = 1;
    $(".box").on("click", function() {
        if ($(this).children().hasClass("lol")) {
            if (x === 1) {
                $(".players").html(q + "'s Move");
                $(this).children().removeClass("lol");
                $(this).children().addClass("my fas fa-times");
                x = 0;
                check("fa-times");
                draw();
            } else if (x === 0) {
                $(".players").html(p + "'s Move");
                $(this).children().removeClass("lol");
                $(this).children().addClass("my far fa-circle");
                x = 1;
                check("fa-circle");
                draw();
            }
        } else {
            alert("you can't click here");
        }
    })


    function check(a) {
        if ($(".box-1 i").hasClass(a) &&
            $(".box-2 i").hasClass(a) &&
            $(".box-3 i").hasClass(a)) {
            windis();
            return true;
        } else if ($(".box-4 i").hasClass(a) &&
            $(".box-5 i").hasClass(a) &&
            $(".box-6 i").hasClass(a)) {
            windis();
            return true;
        } else if ($(".box-7 i").hasClass(a) &&
            $(".box-8 i").hasClass(a) &&
            $(".box-9 i").hasClass(a)) {
            windis();
            return true;
        } else if ($(".box-1 i").hasClass(a) &&
            $(".box-4 i").hasClass(a) &&
            $(".box-7 i").hasClass(a)) {
            windis();
            return true;
        } else if ($(".box-2 i").hasClass(a) &&
            $(".box-5 i").hasClass(a) &&
            $(".box-8 i").hasClass(a)) {
            windis();
            return true;
        } else if ($(".box-3 i").hasClass(a) &&
            $(".box-6 i").hasClass(a) &&
            $(".box-9 i").hasClass(a)) {
            windis();
            return true;
        } else if ($(".box-1 i").hasClass(a) &&
            $(".box-5 i").hasClass(a) &&
            $(".box-9 i").hasClass(a)) {
            windis();
            return true;
        } else if ($(".box-3 i").hasClass(a) &&
            $(".box-5 i").hasClass(a) &&
            $(".box-7 i").hasClass(a)) {
            windis();
            return true;


        } else {
            return false;
        }

        function windis() {
            $(".main").fadeOut(2000).css("display", "none");
            if (a == "fa-times") {
                $(".winner").fadeIn(2000).css("display", "block");
                $(".winner p").html(p);
            } else if (a == "fa-circle") {
                $(".winner").fadeIn(2000).css("display", "block");
                $(".winner p").html(q);
            }
        }

    }

    function draw() {
        if ($(".box-1 i").hasClass("my") &&
            $(".box-2 i").hasClass("my") &&
            $(".box-3 i").hasClass("my") &&
            $(".box-4 i").hasClass("my") &&
            $(".box-5 i").hasClass("my") &&
            $(".box-6 i").hasClass("my") &&
            $(".box-7 i").hasClass("my") &&
            $(".box-8 i").hasClass("my") &&
            $(".box-9 i").hasClass("my")) {
            $(".main").fadeOut(2000).css("display", "none");
            $(".winner").fadeIn(2000).css("display", "block");
            $(".winner h1").html("DRAW!");
            $(".winner p").html(" ");
        }
    }

    $(".restart").on("click", function() {
        $(".main").fadeIn(2000).css("display", "block");
        $(".winner").fadeOut(2000).css("display", "none");
        $(".box").children().removeClass("my fas fa-times");
        $(".box").children().removeClass("my far fa-circle");
        $(".box").children().addClass("lol");
    })
    $(".newgame").on("click", function() {
        $(".winner").fadeOut(2000).css("display", "none");
        $(".overlay").fadeIn(2000).css("display", "block");
        $(".box").children().removeClass("my fas fa-times");
        $(".box").children().removeClass("my far fa-circle");
        $(".box").children().addClass("lol");
        $(".p1").val(" ");
        $(".p2").val(" ");
    })
})
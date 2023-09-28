
// jQueryの基本
// 特定のHTML要素に対してどんな動きor機能を与えるかえお簡単に設定、実装できる

//        $(function () {
//        $("セレクタ").イベント名(function(){
//        $(this).メゾットを指定();
//      });
//        });


// セレクタ名のところに動かしたいHTMLを記述（クラス名、id名で指定）
// イベント部分は「何をきっかけに処理が行われるか」を指定
// ３列目は指定した要素にどんな動きを加えるかを記載

$(function () {
  // ハンバーガーボタンをクリックしたとき
  $('.menu-trigger').click(function () {
    // ハンバーガーボタンに(.active)を表示または非表示させる
    $(this).toggleClass('active');
    //もしハンバーガーボタンに(.active)があれば
    if ($(this).hasClass('active')) {
      // (.g-navi)にも(.active)を追加（つまり表示状態にする）
      $('.g-navi').addClass('active');
      // それ以外の場合は
    } else {
      // (.g-navi)にある(.active)を削除（つまり非表示状態にする）
      $('.g-navi').removeClass('active');
    }
  });
  // 各メニュー(.nav-wrapper ul li a)をタップしたとき、メニューが開いたままではリンク先に飛んだかを確認できないため、タップ後にはメニューを閉じるよう設定

  // 各メニュー(.nav - wrapper ul li a)をタップしたとき
  $('.nav-wrapper ul li a').click(function () {
    // ハンバーガーボタンにある(.active)を削除（つまり非表示状態にする）
    $('.menu-trigger').removeClass('active');
    // (g.navi)にある(.active)も削除（つまり非表示状態にする）
    $('.g-navi').removeClass('active');
  });
});

$(function () {
  function toggleChangeBtn() {
    // 変数slideIndexを定義＝スライドエリア(.staff-box)の中で、.activeを含んでいるスライドのインデックス番号を取得し、変数に代入する
    var slideIndex = $('.staff-box').index($('.active'));
    // 「戻る」「進む」両方のボタン(.slide-button)をshowメソッドで表示
    // showメソッドは指定のオブジェクトを表示するメソッド
    $('.slide-button').show();
    // if文を使って、2パターンの条件分岐と処理内容を記述
    // もし変数「slideIndex」(.activeが付与されている.staff-boxのインデックス番号)の値が0だったら？
    if (slideIndex == 0) {
      // hideメゾットを用いてprevボタン(.prev)を非表示のする
      // hideメソッドは指定のオブジェクトを非表示にするメソッド
      $('.prev').hide();
      // もし変数「slideIndex」(.activeが付与されている.staff-boxのインデックス番号)の値が「２」だったら？
    } else if (slideIndex == 2) {
      // hideメゾットを用いて、nextボタン(.next)を非表示にする
      $('.next').hide();
    }
  }

  toggleChangeBtn();
  // nextボタンをクリックしたとき
  $('.next').click(function () {
    // 変数『displaySlide』に現在表示中のスライドをのオブジェクトを代入
    var displaySlide = $('.active');
    // 変数『displaySlide』から(.active)をremoveClassメソッドで除いて表示されないようにする(removeClass＝削除、非表示)
    displaySlide.removeClass('active box-design');
    // 変数『displaySlide』に対して、nextメソッドを使用し次のスライドを呼び出して、addClassメソッドで(.active)をつけ、表示させる（addClass＝追加、表示）
    displaySlide.next().addClass('active box-design');
    // 関数「toggleChangeBtn」を呼び出し、「現在表示しているスライドのインデックス番号が０なら「戻るボタン」が非表示、２なら「進むボタン」が非表示という判定をする
    toggleChangeBtn();
  });

  //prevボタンをクリックしたとき
  $('.prev').click(function () {
    // 変数『displaySlide』に現在表示中のスライドをのオブジェクトを代入
    var displaySlide = $('.active');
    //変数『displaySlide』から(.active)をremoveClassメソッドで除いて表示されないようにする(removeClass＝削除、非表示)
    displaySlide.removeClass('active box-design');
    // 変数『displaySlide』に対して、prevメソッドを使用し前のスライドを呼び出して、addClassメソッドで(.active)をつけ、表示させる（addClass＝追加、表示）
    displaySlide.prev().addClass('active box-design');
    // 関数「toggleChangeBtn」を呼び出し、現在表示しているスライドのインデックス番号が０なら「戻るボタン」が非表示、２なら「進むボタン」が非表示という判定をする
    toggleChangeBtn();
  });
});

// モーダル部分
$(function () {
  // eachメソッド・・指定した複数のオブジェクトのひとつひとつに対して繰り返し同じ処理を行いたいときに使用するメソッド
  $('.modalopen').each(function () {
    $(this).on('click', function () {
      var target = $(this).data('target');
      var modal = document.getElementById(target);
      console.log(modal);
      $(modal).fadeIn();
      return false;
    });
  });
  $('.modalClose').on('click', function () {
    $('.js-modal').fadeOut();
    return false;
  });
});

// htmlで設定したメニュータグに含まれる(data-filter)の値が、(data-category)の値と同じ場合、商品ボックスだけを表示する機能をつける
$(function () {
  // ①メニュータブの要素いずれかを取得
  var filters = $('.filter [data-filter]');
  // ②商品ボックスいずれかの要素を取得
  var boxes = $('.lineup-wrapper [data-category]');
  // ③メニュータブをクリックした際の処理を記述。引数(e)はイベントオブジェクト。
  filters.on('click', function (e) {
    // ③ブラウザの持つデフォルト機能を実行させないメソッド
    e.preventDefault();
    // ④メニュータブ全てから(.active)クラスを除く
    filters.removeClass('active');
    //⑤選択したメニュータブのオブジェクトにaddClassメソッドで(.active)クラスを付与し表示させる
    $(this).addClass('active');
    // ⑥filterTimeという変数に選択したメニュータグ内のdata-filter属性の値を代入
    var filterTime = $(this).attr('data-filter');
    // ⑦「data-filter」属性の値が「ranking」だった場合
    if (filterTime == 'ranking') {
      // 商品ボックスに全てに対して(.is-animated)を取り外す
      boxes.removeClass('is-animated')
        // ふわっと非表示にし、非同期通信を行う
        .fadeOut().promise().done(function () {
          // 商品ボックス全てに(.is-animated)を付与し、表示させる
          boxes.addClass('is-animated').fadeIn();
        });
      // ⑧「data-filter」属性の値が「ranking」ではなかった場合
    } else {
      // 商品ボックス全てに対して('is-animated')を取り除く
      boxes.removeClass('is-animated')
        // ふわっと非表示にし、非動機通信を行う
        .fadeOut().promise().done(function () {
          // 選択されたタブに対応した商品ボックスのみをふわっと表示させる
          boxes.filter('[data-category="' + filterTime + '"]')
            .addClass('is-animated').fadeIn();
        });
    }
  });
});
// まとめ
// ①と②で変数「filter」と「boxes」を定義する
// ③の処理でブラウザの基本機能をリセットする
// ④と⑤ではクリックされたら、一旦activeクラスがメニュータブ全てから外れクリックした要素($(this))にactiveクラスが付与されるまでを実装する
// ⑥では選択したメニュータブに対し、attrメソッドを用いてメニュータブ内のdata-filter属性の値を代入
// ⑦と⑧では選択されたのがrankingタブだった時とそうじゃない時の処理をそれぞれ用意

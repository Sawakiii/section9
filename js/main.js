// DOMでバリデーションをやてみる

const formInput = document.getElementById("js_form_input")
const formBtn = document.getElementById("js_form_btn")
const alertValidation =document.getElementById("js-alertValidation")

const MinLength = 10
const MaxLength = 20


// event設定の方法1

formBtn.onclick = function() {
    console.log("送信Btnが押されました。")
}

// eventのリストはMDNにあるよ
// プロパティとしてイベントつけるときはonをつける=イベントパンドラ



// htmlタグの属性内にonclick="" ちょいややこしめ

console.log(formInput)

// event設定の方法3
formInput.addEventListener("input", function() {
    if (formInput.value.length < MinLength) {
        alertValidation.textContent = `${MinLength}字以上入力してください。
        現在:${formInput.value.length}文字です。`
        alertValidation.classList.add("invalid")
    } else {
        alertValidation.textContent = "OK!"
        alertValidation.classList.remove("invalid")
    }
})

// formInputqだけだとただのhtmlタグ
// innerHTML and textContent
// webアプリで覚えるべきセキュリティ管理のやつ

const btn = document.getElementById("btn")
const btns = document.getElementsByTagName("button")

for (let i=0; i < btns.length; i++) {
    btns[i].addEventListener("click", function(){
        window.alert(`${i}が押された`)
    })
}

// varだと関数定義された時には決まらず、関数実行時に中身の関数は参照される
// letだとブロック内でスコープが切れるから解決
// クロージャ―というjsの性質










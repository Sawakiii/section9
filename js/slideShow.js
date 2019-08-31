/////////////////////////////////
// 実装をしていこうー画像出る大きくー消えるー出るー大きくー瓢喜


function slideStart() {
    // 1.DOMを取得
    let image = document.getElementsByClassName("image")
    let i = 0

    // 2.画像をfade-in appearをつける
    function fadeIn(image) {
        image.classList.add("image-appear")
        
    }

    function fadeInOut() {
        if (i === 2) {
            image[i].classList.remove("image-appear")
            image[0].classList.add("image-appear")
            i = 0
        }
        image[i].classList.remove("image-appear")
        image[i+1].classList.add("image-appear")
        i++
    }


    fadeIn(image[0])
    setInterval(fadeInOut, 3000)

   
    // 3.fade-outで次のをfade-in appearをけして、つける
    // 4. 3の処理を一定時間間隔で繰り返す(setInterval)最初の画像に戻すところに注意


    // ②最初の画像をフェードイン
    // ③最初の画像をフェードアウト&次の画像をフェードイン
    // ④③の処理を一定間隔で繰り返す(setInterval)
    // (但し、最後の画像がフェードアウトしたら最初の画像をフェードインする)

}

slideStart()


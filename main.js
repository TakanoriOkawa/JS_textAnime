const profile = [
    "｜＋｜＋｜＋｜＋｜＋｜＋｜＋｜",
    "＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊",
    "タップしてくれてありがとう",
    "プロフィールへようこそ",
    "テストテスト",
    "＊＊＊＊＊＊＊＊＊＊＊＊＊＊＊",
    "｜＋｜＋｜＋｜＋｜＋｜＋｜＋｜",
]

let i = 0;
const test = document.getElementById("text");

function ivent(){
    if(i < 7){
        const h1 = document.createElement("h1");
        const text = document.createTextNode(profile[i]);
        test.appendChild(h1).appendChild(text);
        i++;
    }else{
        test.remove();
        document.body.style.backgroundColor  = "black";
        const h1_ = document.createElement("h1");
        const text_ = document.createTextNode("Thank you");
        document.body.appendChild(h1_).appendChild(text_);
    }
}
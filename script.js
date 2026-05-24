const envelope = document.getElementById("envelope");

const hint = document.getElementById("hint");

const message = document.getElementById("message");

const bg = document.getElementById("bg");

const fullMessage = `
Another month, another memories mosh satin.

Thank you mosh sa araw araw na pagmamahal
na binibigay mo sakin at sa pag-intindi mo
sakin kahit na ang kapalit nito ay ang
pagiging sakit sa ulo sayo mosh.

Always remember na MAHAL NA MAHAL KITA.
Natry ko ang aking best para masuklian ko
ang iyong pagmamahal na binibigay mo sakin.

This is all my effort to give you
a simple present.

No matter how many months pass,
ikaw parin ang pipiliin ko araw araw.

Thank you for being part of my life mosh.
You make my days happier, lighter,
and more special.

I appreciate every little thing you do for me,
and I hope you always remember na
sobrang mahal na mahal kita.

ILOVEYOU MOSH ALWAYS ❤️❤️❤️
HAPPY MONTHSARY ULE MOSH ILOVEYOU 🌸
`;

function openEnvelope() {

    envelope.classList.add("open");

    setTimeout(() => {

        hint.style.display = "none";

    }, 500);

    setTimeout(() => {

        message.style.display = "block";

        typeMessage();

    }, 1800);
}

function typeMessage() {

    let i = 0;

    const text = document.getElementById("typingText");

    function typing() {

        if (i < fullMessage.length) {

            if (fullMessage.charAt(i) === "\n") {
                text.innerHTML += "<br>";
            } else {
                text.innerHTML += fullMessage.charAt(i);
            }

            i++;

            setTimeout(typing, 35);
        }
    }

    typing();
}

/* 🌸 FLOWERS */
for (let i = 0; i < 40; i++) {

    let flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = Math.random() > 0.5 ? "🌸" : "🌷";

    flower.style.top = Math.random() * 100 + "vh";

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize = (30 + Math.random() * 30) + "px";

    flower.style.opacity = 0.3 + Math.random() * 0.5;

    bg.appendChild(flower);
}

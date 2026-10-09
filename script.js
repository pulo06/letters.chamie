const letters = {

    inspiration: {

        title: "A Little Reminder",

        text: `

            <p>Dear Chamie,</p>

            <p>
                I hope you know that you are such an inspiration to me,
                or I would say... you are my iron hehe.
            </p>

            <p>
                I don't really know how to explain it properly, but having
                you around has always been something I'm grateful for.
                There's just something about you that makes me feel like
                I can keep going, even when things get a little hard.
            </p>

            <p>
                I am happy I got to be friends with someone whom I can be
                goofy around with, talk about random things with, and of
                course, talk about Jesus with. I really love that we can
                just be ourselves around each other without having to
                think too much about it.
            </p>

            <p>
                I hope we get to make a lot more memories together, have
                more stupid conversations, laugh at things that probably
                aren't even funny, and just continue being the goofy
                people we are.
            </p>

            <p>
                And please know that you are so loved by others, especially
                me hehe. No matter what happens or where life takes us,
                I hope you always remember that you have someone here
                who cares about you.
            </p>

            <p>
                I really hope we get to be friends till the very end.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `

    },


    kindness: {

        title: "Little Things I Love",

        text: `

            <p>Dear Chamie,</p>

            <p>
                One of the things I really love about you is the kind of
                person you are. You are such a kind person, and I love
                how you always look out for the people you love. You
                genuinely care about them and always try your best to
                take care of them.
            </p>

            <p>
                I also really admire how God-fearing you are. I love how
                your faith is such an important part of who you are, and
                I hope you always continue to keep God close to your heart.
            </p>

            <p>
                And of course, you're beautiful too, but I think your
                heart makes you even more beautiful. The way you care
                for the people around you and make sure they're okay
                says a lot about the kind of person you are.
            </p>

            <p>
                And one thing I really love doing with you is praise and
                worship. I love how we can just sing worship songs, dance
                around, and completely forget about everything else. Even
                when we somehow ended up tearing my bedsheet while dancing
                lmao, those are the kind of silly memories I'll always remember.
            </p>

            <p>
                I hope you never lose that kindness in you. The world
                needs more people who genuinely care about others the
                way you do.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `

    },


    faith: {

        title: "For Your Heart",

        text: `

            <p>Dear Chamie,</p>

            <p>
                I really hope you continue to grow closer to God and never
                lose the faith you have in Him. I really admire how important
                your relationship with Jesus is to you, and I hope you always
                keep that part of yourself close to your heart.
            </p>

            <p>
                There will probably be days when you feel lost, tired, or
                unsure about things, but I hope you always remember to turn
                to God and talk to Him. You don't have to have everything
                figured out, and you don't have to carry everything by yourself.
            </p>

            <p>
                I pray that Jesus continues to work in your life, gives you
                wisdom when you need it, gives you strength when things get
                difficult, and helps you become the person He created you to be.
            </p>

            <p>
                And I hope one day, when you look back at your life, you can
                see all the little ways God was there for you, even during
                the moments when you didn't notice Him.
            </p>

            <p>
                Keep your faith, keep praying, and keep being the person you
                are. I hope we can continue talking about Jesus and growing
                in our faith together.
            </p>

            <p class="signature">
                With love,<br>
                Pulo
            </p>

        `

    }

};



const mailbox =
    document.getElementById("mailbox");

const lettersArea =
    document.getElementById("lettersArea");

const instruction =
    document.getElementById("instruction");

const overlay =
    document.getElementById("letterOverlay");

const closeLetter =
    document.getElementById("closeLetter");

const letterHeading =
    document.getElementById("letterHeading");

const letterBody =
    document.getElementById("letterBody");

const envelopes =
    document.querySelectorAll(".envelope");



let mailboxOpened = false;

let selectedLetter = false;



mailbox.addEventListener("click", () => {

    if (mailboxOpened) {

        return;

    }

    mailboxOpened = true;

    mailbox.classList.add("open");

    mailbox.classList.add("shake");

    setTimeout(() => {

        mailbox.classList.remove("shake");

    }, 700);



    instruction.innerHTML =
        "There are three letters inside.<br><strong>You can only choose one.</strong>";



    setTimeout(() => {

        lettersArea.classList.add("visible");



        envelopes.forEach((envelope, index) => {

            setTimeout(() => {

                envelope.classList.add("pop");

            }, index * 130);

        });

    }, 550);

});



envelopes.forEach(envelope => {

    envelope.addEventListener("click", () => {

        if (selectedLetter) {

            return;

        }

        selectedLetter = true;



        const key =
            envelope.dataset.letter;

        const letter =
            letters[key];



        if (!letter) {

            return;

        }



        letterHeading.textContent =
            letter.title;

        letterBody.innerHTML =
            letter.text;



        envelope.classList.add("selected");



        envelopes.forEach(other => {

            if (other !== envelope) {

                other.classList.add("locked");

            }

        });



        setTimeout(() => {

            overlay.classList.add("open");

        }, 200);

    });

});



closeLetter.addEventListener("click", () => {

    overlay.classList.remove("open");

});



overlay.addEventListener("click", event => {

    if (event.target === overlay) {

        overlay.classList.remove("open");

    }

});



document.addEventListener("keydown", event => {

    if (event.key === "Escape") {

        overlay.classList.remove("open");

    }

});



function createPetal() {

    const petal =
        document.createElement("div");

    petal.className = "petal";



    petal.style.left =
        Math.random() * 100 + "vw";

    petal.style.top =
        "-20px";



    const colors = [

        "#f4b8c6",

        "#efabc0",

        "#f6cbd5",

        "#f8d9e0",

        "#e8a7b8"

    ];



    petal.style.background =
        colors[
            Math.floor(
                Math.random() * colors.length
            )
        ];



    petal.style.animationDuration =
        (4 + Math.random() * 3) + "s";



    document.body.appendChild(petal);



    requestAnimationFrame(() => {

        petal.classList.add("active");

    });



    setTimeout(() => {

        petal.remove();

    }, 7500);

}



setInterval(() => {

    if (
        document.visibilityState === "visible"
    ) {

        createPetal();

    }

}, 2600);



setInterval(() => {

    if (
        !mailboxOpened &&
        document.visibilityState === "visible"
    ) {

        mailbox.animate(

            [

                {

                    transform:
                        "translateY(0) rotate(0deg)"

                },

                {

                    transform:
                        "translateY(-4px) rotate(-1deg)"

                },

                {

                    transform:
                        "translateY(0) rotate(0deg)"

                }

            ],

            {

                duration: 900,

                easing: "ease-in-out"

            }

        );

    }

}, 6000);

"use strict";

// import { modules } from "./modules.js";

const modules = {
  syllogism: {
    slides: {
      slide1: {
        example: `All Men are Mortal.
            Socrates is a Man.
            Therefore, Socrates is Mortal.`,
        explainer:
          "Above is an example of a famous type of argument--the syllogism. This argument is deductive. It is deductive because it argues for the certainty of its conclusion. If everything of a type shares one feature, and a particular object is of that type, then you know that said object must share the same feature.",
      },
      slide2: {
        example: `All Men are Mortal.
            Socrates is a Man.
            Therefore, Socrates is Mortal.`,
        explainer:
          "In this example, the premises are that 1. All men are mortal, and that 2. Socrates is a man. If these are both true, then it must be true that Socrates is also mortal. The type is ‘man’, the feature they are said to all share is ‘mortal.’ So if Socrates is of the type “man”, he must share the feature that all things of that type share. ",
      },
      slide3: {
        example: `Premise 1: All Men are Mortal.
            Premise 2: Socrates is a Man.
            Conclusion: Therefore, Socrates is Mortal.`,
        explainer:
          "The syllogism is itself a type, it refers to the way that claims are ordered in an argument. It involves two premises that entail a conclusion. What this means is that a syllogism makes two claims, and that if those two claims are true, it is logically impossible that a third claim would be false. ",
      },
      slide3: {
        example: `All X are Y = All Men are Mortal.
            Z is X = Socrates is a Man.
            Therefore, Z is Y = Therefore, Socrates is Mortal.`,
        explainer:
          "Because this form of argument refers to a structure rather than any particular claims, we can abstract it out into an almost mathematical formula. See above.",
      },
      slide4: {
        example: `All X are Y = All Men are Mortal.
            Z is X = Socrates is a Man.
            Therefore, Z is Y = Therefore, Socrates is Mortal.`,
        explainer:
          "We can then plug anything we want into this more abstract form. For example, see the next slide.",
      },
      slide5: {
        example: `All cats can fly
            Muffins in a cat
            Therefore, Muffins can fly`,
        explainer:
          "This example shows us the way an argument can be logically correct, but factually false. The logic is correct, but the claims are not true. Even in this example, if it was true that cats could fly, and that Muffins was a cat, then it would have to be true that Muffins could fly.",
      },
      slide6: {
        example: `All cats can fly
            Muffins in a cat
            Therefore, Muffins can fly`,
        explainer:
          "This is the difference between validity and soundness. If an argument is logically correct, it is <span style='font-weight:600'>valid</span>. In a valid deductive argument, the premises being true means the conclusion must be true. But this does not guarantee that the premises are in fact, true. When the claims are are factually true, then the argument is <span style='font-weight: 600'>sound</span>.",
      },
      slide7: {
        example: `No worms can jump.
            My cat is not a worm.
            Therefore, my cat can jump.`,
        explainer:
          "The opposite can also happen, where the logic is incorrect, but the claims are correct. In this case the argument is sound (it does not make any false statements), but it is invalid (the conclusion does not follow from the premises).",
      },
      slide8: {
        example: `If (All Men are Mortal,
                And Socrates is a Man) Then {
               Socrates is Mortal
           }`,
        explainer:
          "However, we will see like this syllogism, that if you understand the logic behind the code, then this becomes a key to reading that code. Coding is particularly helpful, because it trains this sort of attention to the same sort of logical structure important for making an effective argument.",
      },
      slide9: {
        example: `If (All Men are Mortal,
                And Socrates is a Man) Then {
               Socrates is Mortal
           }`,
        explainer: `First it's important to know some basic syntax--specifically if-then statements and boolean operators. Don’t be put off by jargon. “Boolean Operator” may sound technical and complex, but keep in mind that arithmetic operators include the ‘+’ (plus) and ‘-’ (minus) signs.`,
      },
      slide10: {
        example: `If (All Men are Mortal,
                And Socrates is a Man) {
               Socrates is Mortal
           }`,
        explainer:
          "So what is a Boolean Operator? Well a boolean is just a value that is either true or false. The statement ‘I am Hungry’ has a boolean value of ‘true’ when I am hungry, and false when I have just eaten my fill. This is just technical speak for whether something is true or false, given some condition.",
      },
      slide11: {
        example: `If (All Men are Mortal,
                And Socrates is a Man) {
               Socrates is Mortal
           }`,
        explainer:
          "We already know some boolean operators, like ‘>’ and ‘<’. 6 > 4 means 6 is greater than 4. This is true, so it would return a boolean value of ‘true’. If we said 2 > 4, meaning 2 is greater than 4, this would return a boolean value of false, simply, because it is not true.",
      },
      slide12: {
        example: `If (All Men are Mortal, <span style="font-weight:500">= All Men === Mortal</span>
                And Socrates is a Man) {      <span style="font-weight:500">= Socrates === a Man</span>
               Socrates is Mortal
           }`,
        explainer: `In JavaScript we also have the boolean operators of ‘===’ and ‘!==’. The first means ‘is equal to’. If I wrote: 2 === (1 + 1), it would return a boolean value of true, because 2 is equal to 1 + 1. Inversely, if I wrote 2 === (1 + 2), it would return false, because 2 is not equal to 1 + 2.`,
      },
      slide13: {
        example: `If (All Men === Mortal 
                And Socrates === a Man ) {
               Socrates is Mortal
           }`,
        explainer:
          "The second operator, '!==', means does not equal. If I wrote 2 !== (1 + 2), it would return true, because 2 is not equal to 1 + 2. However, if I wrote  2 !== (1 + 1) it would return false, because the operator asked the question “is 2 a different value than 1 + 1.” The answer to that question is ‘no’, and so it returns as false.",
      },
      slide14: {
        example: `If (All Men === Mortal 
                'And' Socrates === a Man ) { <span style="font-weight:500">=== '&&' Socrates === a Man</span>
               Socrates is Mortal
           }`,
        explainer:
          "The third operator, '&&', means 'and'. If I wrote (2 + 1) === 3 && (1 + 1 + 1) === 3, this would mean two plus one is equal to three, and that one plus one plus one is equal to three. This is true, so it would return the value 'true.'",
      },
      slide15: {
        example: `If (All Men === Mortal 
                && Socrates === a Man ) {
               Socrates = Mortal
           }`,
        explainer:
          "The last operator we need to know to fully convert our syllogism into JavaScript is the equality operator (=)--which is great since everyone already knows it. In JavaScript, the ‘=’ sign by itself sets a variable to some value. So x = 4, would mean that from now on until its changed again in the code, whenever I write ‘x’ the computer will read it as the number 4.",
      },
      slide16: {
        example: `If (All Men === Mortal 
                && Socrates === a Man ) {
               Socrates = Mortal
           }`,
        explainer: `There is still one problem with our code argument here, and it's one that is frequently a problem with argument too. Words are flexible and it can often be hard to pin down their meanings. That is why it is sometimes useful to define our words, and tell the readers exactly what we mean by the words that we use.`,
      },
      slide17: {
        example: `Class Men {
            };`,
        explainer: `For example, here it is clear that by ‘Men’ we are referring to a type, and that by ‘Man’ we are referring to something of that type. In JavaScript, we tell the computer that something is a type by declaring it as a class, like above.`,
      },
      slide18: {
        example: `Class Men {
              <span style="font-weight:500">mortal = true</span>;
            };`,
        explainer: `Usually things of a type share something in common, and we can tell the computer what that is by defining a property and setting its value to true, to signify that it's true that the type has this property.`,
      },
      slide19: {
        example: `Class Men {
                mortal: true
                <span style="font-weight:500">constructor(name) {
                    this.name = name
                }</span>
            };`,
        explainer: `Things of a type also usually have common differences that make them all distinct, for example their name. We can signify this in JavaScript by putting a ‘constructor’ in the class. All this constructor does is build in what makes each item of a type unique. All this means is that the name of each person is determined by that unique person, and that not all of them have the same name.`,
      },
      slide20: {
        example: `Class Men {
                mortal: true
                constructor(name) {
                    this.name = name
                }
            };
            <span style="font-weight:500">new Man(‘Socrates’)</span>`,
        explainer: `Now, we want to tell the computer that Socrates is a member of this type. So we declare Socrates as a new Man, and put his name in the brackets, which that constructor we put in the class will automatically apply to this new man Socrates that we have just declared.`,
      },
      slide21: {
        example: `If (All Men === Mortal 
                && Socrates === a Man ) { <span style="font-weight:500">=== Socrates <span style='color:purple'>instanceof</span> Men</span>
               Socrates = Mortal
           }`,
        explainer: `Now we want to check if Socrates is a member of the type man, for our argument. We can do this with the ‘instanceof’ operator, which quite literally checks if Socrates is an instance of the general type ‘men’ that we defined earlier.`,
      },
      slide22: {
        example: `If (All Men === Mortal | <span style="font-weight:500">=== Men.hasOwnProperty('mortal')</span>
                && Socrates instanceof Men ) { 
               Socrates = Mortal
           }`,
        explainer: `Next, we can rewrite the top condition so that the computer can read it. We now ask if the type or class ‘Men’ that we defined earlier has the property ‘mortal’, which is a more computer programming way of asking if All Men are Mortal.`,
      },
      slide23: {
        example: `If (Men.hasOwnProperty('mortal')
            && Socrates instanceof Men ) { 
           Socrates = Mortal <span style="font-weight:500">=== Socrates.mortal</span>
       }`,
        explainer: `Then, we can clean up the final line between the two curly brackets, which is the code that the program will run if the conditions in the smooth brackets are both true. Since Mortality is just a property or state of Socrates, we want to set it as a state using a dot.`,
      },
      slide24: {
        example: `If (Men.hasOwnProperty('mortal')
            && Socrates instanceof Men ) { 
              <span style="font-weight:500">Socrates.mortal = true</span>
       }`,
        explainer: `Then, we want to use the equality operator to set Socrates' mortality to true, because it is true that Socrates is mortal. If this was false, it would mean he would be immortal.`,
      },
      slide25: {
        example: `If (Men.hasOwnProperty('mortal')
            && Socrates instanceof Men ) { 
           Socrates.mortal = true
       } <span style="font-weight:500"><span style="color:red">else</span> {}</span>`,
        explainer: `Finally we can add an ‘else’ condition--what to do if one or more of the conditions in the curly braces are false. We do this by adding else, and then more curly braces which signifies the place to find the code to run in case a condition is false.`,
      },
      slide26: {
        example: `If (Men.hasOwnProperty('mortal')
            && Socrates instanceof Men ) { 
           Socrates.mortal = true
       } else { <span style="font-weight:500">Socrates.mortal = false</span> }`,
        explainer: `We know that if Socrates is not mortal, he must be, well... not mortal. So let's tell the computer to set Socrates’s mortality to false if one of the above conditions is false.`,
      },
      slide27: {
        example: `If (Men.hasOwnProperty('mortal')
            && Socrates instanceof Men ) { 
           Socrates.mortal = true
       } else { Socrates.mortal = false }`,
        explainer: `Congratulations you are now well on your way to reading code and making deadly effective Syllogistic arguments! As a bonus challenge see if you can figure out the argument logic error we made here, then move on to see the answer.`,
      },
      slide28: {
        example: `If (Men.hasOwnProperty('mortal')
            && Socrates instanceof Men ) { 
           Socrates.mortal <span style="font-weight:500">= true</span>
       } else { Socrates.mortal <span style="font-weight:500">= false</span> }`,
        explainer: `Hint: In a syllogistic argument, the conditions must both be true for the conclusion to be true. In this argument, does it follow that if the conditions are <span style='font-weight: 600'>not</span> true that the opposite conclusion must be false?`,
      },
      slide29: {
        example: `If (Men.hasOwnProperty('mortal')
            && Socrates instanceof Men ) { 
           Socrates.mortal = true
       } else { Socrates.mortal <span style="font-weight:500">?</span>= false }`,
        explainer: `Answer: The argument tells us that all men are mortal, and so if Socrates is a man, that he must be mortal. But, it does not tell us that ONLY men are mortal. Therefore, Socrates, even if not a man, could still be mortal. Let's update our code accordingly.`,
      },
      slide30: {
        example: `If (Men.hasOwnProperty('mortal')
            && Socrates instanceof Men ) { 
           Socrates.mortal = true
       } else { <span style="font-weight:500">Socrates.mortal = 'unknown'</span> }`,
        explainer: `That looks better. Now, its time to experiment with making syllogistic arguments in JavaScript on the next slide! After a brief challenge, that is.`,
      },
    },
    challenge: {
      initialSlide: {
        prompt: `I heard you’ve been learning about the Syllogistic Argument & JavaScript. As for JavaScript, I’m no master, but I was the king of argument back in my day. Let’s see what you’ve retained from your study so far, hmm?`,
        responses: [
          [true, `Alright, let’s do it then.`],
          [true, `Sounds good to me!`],
          [false, `Not right now.`],
        ],
      },
      challenge1: {
        prompt: `What type of argument is a syllogism?`,
        responses: [
          [false, `Inductive`],
          [false, `Detective`],
          [true, `Deductive`],
        ],
      },
      challenge2: {
        prompt: `What’s the key feature of a deductive argument?`,
        responses: [
          [
            true,
            `If all its premises are right, then its conclusion must be right.`,
          ],
          [
            false,
            `If all its premises are right, then its conclusion is probably right.`,
          ],
          [false, `It ‘deducts’ the truth from its premises.`],
        ],
      },
      challenge3: {
        prompt: `If the premises in an argument being all true means the conclusion must also be true, then what is that argument?`,
        responses: [
          [true, `Valid`],
          [false, `Sound`],
          [false, `True`],
        ],
      },
      challenge4: {
        prompt: `If an argument’s premise is false then it is not a deductive argument.`,
        responses: [
          [false, `True`],
          [true, `False`],
        ],
      },
      challenge5: {
        prompt: `Is this a valid syllogistic argument: 
          Some Peaches are Sweet
          The fruit on that tree are all Peaches
          Therefore, all the fruit on that tree are sweet`,
        responses: [
          [false, `Valid`],
          [true, `Invalid`],
        ],
      },
      challenge6: {
        prompt: `Is this a valid syllogistic argument: 
          Every Number immediately after an odd number is an even number
          2 is an odd number
          Therefore, 3 is an even number.`,
        responses: [
          [true, `Valid`],
          [false, `Invalid`],
        ],
      },
      challenge7: {
        prompt: `Is this a valid syllogistic argument: 
          No pigs can fly
          My pet can fly
          Therefore, my pet is not a pig.`,
        responses: [
          [true, `Valid`],
          [false, `Invalid`],
        ],
      },
      challenge8: {
        prompt: `Is this a valid syllogistic argument: 
          All blue towels are not yellow
          My towel is yellow
          Therefore, my towel is not blue`,
        responses: [
          [true, `Valid`],
          [false, `Invalid`],
        ],
      },

      finalSlide: {
        prompts: [
          [
            0,
            1,
            `A low score but don't be discouraged! Education is a process that takes time, and is aided as much by our failures as by our successes.`,
          ],
          [
            2,
            3,
            `You're starting to get the basics down! Keep at it and you're sure to get further along.`,
          ],
          [
            4,
            5,
            `Strong stuff. You're well on your way to putting together some powerful arguments as far as I can tell.`,
          ],
          [6, 7, `Well done, you've got a knack for this stuff!`],
          [
            8,
            8,
            `Wow, a perfect score! Glad you weren't around to challenge me in arguement back in my day.`,
          ],
        ],
        responses: ["Return", `Restart`],
      },
    },
  },
};

// General Utility Functions

const hideElement = (...elements) =>
  elements.forEach((element) => element.classList.add("hidden"));

const displayElement = (...elements) =>
  elements.forEach((element) => element.classList.remove("hidden"));

const toggleDisplay = (...elements) =>
  elements.forEach((element) => element.classList.toggle("hidden"));

const allEqual = (arr) => arr.every((val) => val[1] === arr[0][1]);

// Objects

const mainMenu = {
  div: document.getElementById("lesson-selector"),
  links: {
    syllogism: document.getElementById("link-syllogism"),
  },
};

const slideShow = {
  div: document.getElementById("teacher-phase--div"),
  btns: {
    div: document.getElementById("slide-show--btns-div"),
    next: document.getElementById("slide-show--btn-next"),
    back: document.getElementById("slide-show--btn-previous"),
  },
  example: document.getElementById("example-text"),
  explainer: document.getElementById("explainer-text"),
  notes: {
    btn: document.getElementById("notes-btn"),
    minimize: document.getElementById("notes--btn-minimize"),
    div: document.getElementById("notes-interface--div"),
    textarea: document.getElementById("notes-textarea"),
  },

  order: 1,

  changeSlide(direction) {
    if (this.order === Object.keys(this.slides).length) {
      challengeInterface.initialize();
      compilerSimulation.initialize();
      return;
    }
    if (direction === "next" && this.order < Object.keys(this.slides).length) {
      this.order++;
    }

    if (direction === "back" && this.order > 1) this.order--;
    this.currentSlide = this.slides[`slide${this.order}`];
    this.displaySlide();
  },

  displaySlide(slide = this.currentSlide) {
    this.example.innerHTML = `\t&nbsp;&nbsp;` + slide.example;
    this.explainer.innerHTML = slide.explainer;
  },
};

slideShow.notes.btn.addEventListener("click", function () {
  toggleDisplay(slideShow.notes.div);
});

slideShow.notes.minimize.addEventListener("click", function () {
  hideElement(slideShow.notes.div);
});

class Code {
  mortal = true;
  constructor(
    className,
    property,
    propValue,
    constructedValue,
    instance,
    ifClassName,
    ifProperty,
    ifInstance,
    ifClassName2,
    codeInstance,
    codeProperty,
    codeValue
  ) {
    this.className = className;
    this.property = property;
    this.propValue = propValue;
    this.constructedValue = constructedValue;
    this.instance = instance;
    this.ifClassName = ifClassName;
    this.ifProperty = ifProperty;
    this.ifInstance = ifInstance;
    this.ifClassName2 = ifClassName2;
    this.codeInstance = codeInstance;
    this.codeProperty = codeProperty;
    this.codeValue = codeValue;
  }
}

const compilerSimulation = {
  div: document.getElementById("code-div"),
  btnsDiv: document.getElementById("code--btns-div"),
  codeInputs: document.querySelectorAll(".code-input"),
  constructedValueText: document.querySelectorAll(".constructed-value"),
  classNameText: document.getElementById("className"),
  classNameInput: document.getElementById("class-name-input"),
  constructorInput: document.getElementById("constructed-value-input"),
  constructedValueOne: document.getElementById("constructed-value-one"),
  btnCheckCode: document.getElementById("code--btn-check-code"),
  btnParseArgument: document.getElementById("code--btn-generate-argument"),

  argumentParser: {
    div: document.getElementById("argument-generator-div"),
    lineOne: document.getElementById("argument-generator-line-one"),
    lineTwo: document.getElementById("argument-generator-line-two"),
    lineThree: document.getElementById("argument-generator-line-three"),
    status: document.getElementById("argument-generator-status"),
    btnClose: document.getElementById("argument-generator--btn-close"),
  },

  valid: null,

  initialize() {
    hideElement(mainMenu.div, slideShow.div, slideShow.btns.div);
    displayElement(this.div, this.btnsDiv);
    this.updateText();
  },
  updateText() {
    compilerSimulation.classNameText.textContent =
      compilerSimulation.classNameInput.value;
    compilerSimulation.constructedValueText.forEach(
      (text) => (text.textContent = compilerSimulation.constructorInput.value)
    );
  },

  getCode(task) {
    this.entries = [];
    this.codeInputs.forEach((input) => this.entries.push(input.value));
    this.code = new Code(...this.entries);
    console.log(this.code);
    if (task === "parse") this.parseArgument();
    if (task === "check") this.checkCode();
  },
  parseArgument() {
    if (this.valid !== null) this.checkCode();
    this.argumentParser.lineOne.textContent = `All ${this.code.ifClassName} are ${this.code.ifProperty}`;
    this.argumentParser.lineTwo.textContent = `${this.code.ifInstance} is of the type: ${this.code.ifClassName2}`;
    this.argumentParser.lineThree.textContent = `Therefore, ${this.code.codeInstance} is ${this.code.codeProperty}`;
  },
  checkCode() {
    this.codeCheck = {
      classNames: [],
      instances: [],
      properties: [],
      values: [],
    };

    for (const [key, value] of Object.entries(this.code)) {
      if (key.includes("className") || key.includes("ClassName"))
        this.codeCheck.classNames.push([key, value]);
      if (key.includes("instance") || key.includes("Instance"))
        this.codeCheck.instances.push([key, value]);
      if (key.includes("property") || key.includes("Property"))
        this.codeCheck.properties.push([key, value]);
      if (key.includes("value") || key.includes("Value")) {
        if (key.includes("constructed")) continue;
        this.codeCheck.values.push([key, value]);
      }
    }
    this.checkValidity();

    console.log(this.checkSummary);
  },
  handleErrors(value, boolean) {
    if (boolean === false) {
      this.codeInputs.forEach((input) => {
        if (input.value === value) input.classList.add("code-error");
      });
    } else {
      this.codeInputs.forEach((input) => {
        if (input.value === value) input.classList.remove("code-error");
      });
    }
    return boolean;
  },
  checkValidity() {
    this.checkSummary = {
      classNames: true,
      instances: true,
      properties: true,
      values: true,
    };

    for (const [key, value] of Object.entries(this.codeCheck)) {
      this.checkSummary[key] = allEqual(value)
        ? this.handleErrors(value[1][1], true)
        : this.handleErrors(value[1][1], false);
    }

    this.valid = true;

    for (const value of Object.values(this.checkSummary)) {
      if (value === false) this.valid = false;
    }

    if (this.valid)
      this.argumentParser.status.innerHTML = `Status: <span style="color:green">Valid</span>`;
    if (!this.valid)
      this.argumentParser.status.innerHTML = `Status: <span style="color:red">Invalid</span>`;
  },
};

const challengeInterface = {
  div: document.getElementById("section-challenge"),
  sectionMain: document.getElementById("section-main"),
  prompt: document.getElementById("challenge-prompt"),
  responses: document.querySelectorAll(".challenge-response"),
  userResponsesDiv: document.getElementById("user-response--div"),
  responseDivs: document.querySelectorAll(".challenge-response--div"),
  scoreCount: document.getElementById("score-count"),

  order: 0,
  score: 0,

  initialize() {
    this.score = 0;
    this.order = 0;
    this.final = false;

    this.div.scrollIntoView({ behavior: "smooth" });
    this.currentChallenge = slideShow.module.challenge;
    this.currentSlide = this.currentChallenge.initialSlide;
    this.prompt.textContent = this.currentSlide.prompt;
    this.responses.forEach(
      (response, i) =>
        (response.textContent = this.currentSlide.responses[i][1])
    );
    this.scoreCount.textContent = `${this.score}/${
      Object.keys(this.currentChallenge).length - 2
    }`;

    this.responseDivs.forEach((div, i) =>
      div.addEventListener("click", function () {
        if (i === 0) {
          if (challengeInterface.final) {
            challengeInterface.return();
            return;
          }
        }

        if (i === 1) {
          if (challengeInterface.final) {
            challengeInterface.initialize();
            challengeInterface.handleDivCount();
            challengeInterface.initialize();
            return;
          }
        }
        const text = document.getElementById(`question-response-${i + 1}`);
        const answerValue = challengeInterface.currentSlide.responses.find(
          (response) => response[1] === text.textContent
        )[0];

        if (challengeInterface.order === 0 && !answerValue)
          challengeInterface.sectionMain.scrollIntoView({
            behavior: "smooth",
          });
        if (
          answerValue &&
          challengeInterface.order > 0 &&
          challengeInterface.order <=
            Object.keys(challengeInterface.currentChallenge).length
        )
          challengeInterface.score++;

        console.log(challengeInterface.score);
        challengeInterface.nextSlide();
        challengeInterface.scoreCount.textContent = `${
          challengeInterface.score
        }/${Object.keys(challengeInterface.currentChallenge).length - 2}`;
      })
    );
  },
  updateElements() {
    this.responseDivs = document.querySelectorAll(".challenge-response--div");
    this.generatedResponses = document.querySelectorAll(
      ".generated-response--div"
    );
    this.responses = document.querySelectorAll(".challenge-response");
  },
  nextSlide() {
    this.updateElements();
    if (this.order === Object.keys(this.currentChallenge).length - 2) {
      this.displayFinalSlide();
      return;
    }
    if (this.order <= Object.keys(this.currentChallenge).length) this.order++;
    this.displayChallenge();
  },
  displayChallenge() {
    this.currentSlide = this.currentChallenge[`challenge${this.order}`];
    this.prompt.textContent = this.currentSlide.prompt;
    this.updateElements();
    if (this.responses.length !== this.currentSlide.responses.length)
      this.handleDivCount();

    this.responses.forEach(
      (response, i) =>
        (response.textContent = this.currentSlide.responses[i][1])
    );
  },
  displayFinalSlide() {
    this.final = true;
    this.currentSlide = this.currentChallenge.finalSlide;
    console.log(
      this.currentSlide.prompts.find((prompt) => prompt.includes(this.score))
    );
    const finalPrompt = this.currentSlide.prompts.find((prompt) =>
      prompt.includes(this.score)
    )[2];
    this.prompt.textContent = finalPrompt;

    this.updateElements();
    this.generatedResponses.forEach((div) => div.remove());
    this.updateElements();
    this.responses.forEach((response, i) => {
      response.textContent = this.currentSlide.responses[i];
    });
  },

  handleDivCount() {
    this.clearGeneratedDivs();

    if (this.currentSlide.responses.length === 2) {
      this.updateElements();
      return;
    }

    for (let i = 3; i <= this.currentSlide.responses.length; i++) {
      this.userResponsesDiv.insertAdjacentHTML(
        "beforeend",
        `<div class='challenge-response--div generated-response--div'><a>${i}. </a><a class='challenge-response' id='question-response-${i}'></a></div>`
      );
    }
    this.updateElements();
  },
  clearGeneratedDivs() {
    this.updateElements();
    this.generatedResponses.forEach((response) => response.remove());
  },

  return() {
    this.sectionMain.scrollIntoView({ behavior: "smooth" });
  },
};

// Function Calls
// slideShow.module = modules.syllogism;
// challengeInterface.initialize();
challengeInterface.return();

// Event Listeners

mainMenu.links.syllogism.addEventListener("click", function () {
  slideShow.module = modules.syllogism;
  slideShow.slides = modules.syllogism.slides;
  hideElement(mainMenu.div);
  displayElement(slideShow.div, slideShow.btns.div);
  slideShow.changeSlide();
});

slideShow.btns.next.addEventListener("click", () => {
  slideShow.changeSlide("next");
});

slideShow.btns.back.addEventListener("click", () =>
  slideShow.changeSlide("back")
);

compilerSimulation.classNameInput.addEventListener("input", function () {
  compilerSimulation.updateText();
});

compilerSimulation.constructorInput.addEventListener("input", function () {
  compilerSimulation.updateText();
});

compilerSimulation.btnCheckCode.addEventListener("click", function () {
  compilerSimulation.getCode("check");
});

compilerSimulation.btnParseArgument.addEventListener("click", function () {
  displayElement(compilerSimulation.argumentParser.div);
  compilerSimulation.getCode("parse");
});

compilerSimulation.argumentParser.btnClose.addEventListener("click", () =>
  hideElement(compilerSimulation.argumentParser.div)
);

/*
Bugs:

1. when challengeInterface deletes generated 


*/

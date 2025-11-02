function pascalCaseSplitter(singleString) {
    const text = singleString.split(/(?=[A-Z])/)
    console.log(text.join(", "));
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')
pascalCaseSplitter('HoldTheDoor')
pascalCaseSplitter('ThisIsSoAnnoyingToDo')

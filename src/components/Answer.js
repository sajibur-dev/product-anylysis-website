import React from "react";
import Styles from "../Module/Answer.module.css";

const Answer = () => {
  return (
    <div className={Styles.question_container}>
      <div className={Styles.answer_container}>
        <h3 className={Styles.answer_title}>what is context api?</h3>
        <p>
          Context api is just simple class that provide two component one is
          Provider and other is Consumer Provider set some value in class and
          the consumer just consumes that value . If any parent component value
          is needed and any child component then we use context api . In context
          api, child component consume data from parent component using
          context.consumer. Context api provide a way to share global data
          through component tree
        </p>
      </div>
      <div className={Styles.answer_container}>
        <h3 className={Styles.answer_title}>What is semantic tag?</h3>
        <p>
          Semantic tag হচ্ছে এমন tag যেটা machine এবং human দুজনের জন্যই
          meaningful.. Exp: section , table ,main
          <code>
            <section></section>
            <table></table>
            <main></main>
          </code>
        </p>
      </div>    
    </div>
  );
};

export default Answer;

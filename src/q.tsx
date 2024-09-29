import React, { useState } from 'react';
import Question from './qutiosn';
const qs = [
  {
    text: 'السؤال الأول: ما هو عاصمة فرنسا؟',
    answers: ['باريس', 'برلين', 'مدريد'],
    correctId: 0,
  },
  {
    text: 'السؤال الثاني: ما هو أكبر كوكب في نظامنا الشمسي؟',
    answers: ['الأرض', 'المشتري', 'زحل'],
    correctId: 1,
  },
  {
    text: 'السؤال الثالث: ما هو العنصر الكيميائي الذي يرمز له بـ "O"?',
    answers: ['الذهب', 'الأكسجين', 'الفضة'],
    correctId: 1,
  },
  {
    text: 'السؤال الرابع: من هو مؤسس شركة مايكروسوفت؟',
    answers: ['ستيف جوبز', 'بيل غيتس', 'مارك زوكربيرغ'],
    correctId: 1,
  },
  {
    text: 'السؤال الخامس: ما هو أطول نهر في العالم؟',
    answers: ['النيل', 'الأمازون', 'اليانغتسي'],
    correctId: 0,
  },
];

const Qutions = () => {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(0);
  const [checked, setChecked] = useState(NaN);
  /* const addQuestion = (text: string, answers: any, correctId: number) => {
    // تحقق من صحة مدخلات الدالة
    if (
      typeof text !== 'string' ||
      !Array.isArray(answers) ||
      typeof correctId !== 'number'
    ) {
      throw new Error('المدخلات غير صحيحة');
    }
    if (correctId < 0 || correctId >= answers.length) {
      throw new Error('رقم الإجابة الصحيحة غير صحيح');
    }

    // إضافة السؤال الجديد إلى المصفوفة
    qs.push({
      text: text,
      answers: answers,
      correctId: correctId,
    });
  };
  */
  const addPoint = () => {
    setScore(score + 1);
  };
  return (
    <div className="container" dir="rtl">
      <div id="quiz-form">
        <React.Fragment key={2}>
          <Question
            q={qs[count].text}
            answers={qs[count].answers as any}
            checked={checked}
            setChecked={setChecked}
          />
          <button
            onClick={() => {
              if (checked === qs[count].correctId) {
                addPoint();
              }
              if (count < qs.length - 1) {
                setCount(count + 1);
                console.log(qs.length, count);
              } else {
                alert(` نتيجتك هي : ${score} / ${qs.length}`);
                setCount(0);
              }
              setChecked(-1)
            }}
          >
            التالي
          </button>
        </React.Fragment>
      </div>
    </div>
  );
};
export default Qutions;

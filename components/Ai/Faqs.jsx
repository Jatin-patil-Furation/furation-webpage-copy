"use client";

import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import "./styles.css";

const Faqs = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Can AI be customized to meet specific business needs?",
      answer:
        "AI is highly customizable to address specific business requirements. Customization involves tailoring machine learning algorithms, selecting and preprocessing data, and designing neural network architectures to align with the precise objectives and challenges unique to each business. By adapting AI models, we can optimize processes, enhance decision-making, and achieve precise outcomes.",
    },
    {
      id: 2,
      question: "What industries can benefit from AI implementation?",
      answer:
        "AI implementation offers significant benefits across various industries, including healthcare, finance, manufacturing, retail, transportation, marketing, and energy. In healthcare, AI aids in diagnosis and personalized treatment plans. In finance, it enhances fraud detection and algorithmic trading. Manufacturing benefits from AI by optimizing production and predictive maintenance. Retail leverages AI for personalized recommendations and inventory management. Transportation sees advancements in autonomous vehicles and route optimization. In marketing, AI improves customer targeting and campaign optimization. Energy benefits from AI in grid management and energy consumption prediction. These examples demonstrate the extensive applicability of AI across diverse sectors.",
    },
    {
      id: 3,
      question: "What data is required to train an AI model?",
      answer:
        "The data necessary for training an AI model depends on the specific task. For instance, in image recognition, you need a substantial dataset of labeled images to teach the model to recognize patterns. In natural language processing tasks, such as sentiment analysis, you require text corpora with labeled sentiment annotations. Predictive analytics, such as predicting sales, demand historical data with corresponding target labels. The quality, quantity, and relevance of the training data significantly influence the model's performance, making data selection a critical aspect of AI development.",
    },
    {
      id: 4,
      question:
        "What are the potential risks and ethical considerations associated with AI?",
      answer:
        "The data necessary for training an AI model depends on the specific task. For instance, in image recognition, you need a substantial dataset of labeled images to teach the model to recognize patterns. In natural language processing tasks, such as sentiment analysis, you require text corpora with labeled sentiment annotations. Predictive analytics, such as predicting sales, demand historical data with corresponding target labels. The quality, quantity, and relevance of the training data significantly influence the model's performance, making data selection a critical aspect of AI development.",
    },
    {
      id: 5,
      question:
        "What security measures are in place to protect data processed by AI?",
      answer:
        "To safeguard data processed by AI, robust security measures are in place, including encryption, access control, and secure architectures. Data is encrypted during transmission and storage to prevent unauthorized access. Strict access controls limit data access to authorized personnel, ensuring data confidentiality. Secure AI system architectures are designed with security in mind, implementing industry- standard practices to protect against cyber threats and vulnerabilities. These measures collectively ensure that data processed by AI remains secure and compliant with data protection regulations.",
    },
  ];

  const handleToggle = (faqid) => (e) => {
    e.preventDefault();
    if (faqid === openFaq) {
      setOpenFaq(null);
    } else {
      setOpenFaq(faqid);
    }
  };

  console.log("openFaq", openFaq);

  return (
    <div className="w-full  text-white min-h-sceen">
      <div className="grid">
        {faqs.map((faq, index) => {
          if (faq.id === 4) {
            return (
              <div className="pb-12" key={faq.id}>
                <details
                  className="group"
                  open={openFaq === faq.id}
                  onClick={handleToggle(faq.id)}
                >
                  <summary className="summaryDiv flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold py-2">
                      {/* Can AI be customized to meet specific business needs? */}
                      {faq.question}
                    </span>
                    <span className="transition group-open:rotate-180">
                      <BiChevronDown size={32} />
                    </span>
                  </summary>
                  <div>
                    <p className="smallText mb-2">
                      AI introduces several potential risks and ethical
                      considerations. These encompass:
                    </p>
                    <ul className="text-white list-disc px-5 ">
                      <li className="my-1">
                        <p className="smallText">
                          Bias in AI decision-making, which can perpetuate
                          inequalities.
                        </p>
                      </li>
                      <li className="mb-1">
                        <p className="smallText">
                          Privacy concerns related to the handling and storage
                          of sensitive data.
                        </p>
                      </li>
                      <li className="mb-1">
                        <p className="smallText">
                          Job displacement as automation replaces certain tasks.
                        </p>
                      </li>
                      <li className="mb-1">
                        <p className="smallText">
                          Lack of transparency in AI decision processes.
                        </p>
                      </li>
                      <li className="mb-1">
                        <p className="smallText">
                          Addressing these challenges necessitates the
                          implementation of ethical guidelines, transparent
                          algorithms, responsible AI development practices, and
                          regulatory oversight. It is imperative to continually
                          assess and mitigate these risks to ensure AI's
                          responsible and ethical use.
                        </p>
                      </li>
                    </ul>
                  </div>
                </details>
              </div>
            );
          } else {
            return (
              <div className="pb-12" key={faq.id}>
                <details
                  className="group"
                  open={openFaq === faq.id}
                  onClick={handleToggle(faq.id)}
                >
                  <summary className="summaryDiv flex justify-between items-center font-medium cursor-pointer list-none">
                    <span className="text-lg font-semibold py-2">
                      {/* Can AI be customized to meet specific business needs? */}
                      {faq.question}
                    </span>
                    <span className="transition group-open:rotate-180">
                      <BiChevronDown size={32} />
                    </span>
                  </summary>
                  <p className="smallText">{faq.answer}</p>
                </details>
              </div>
            );
          }
        })}
      </div>
    </div>
  );
};

export default Faqs;

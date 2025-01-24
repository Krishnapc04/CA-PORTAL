import React, {useState} from 'react'

const Accordion = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(null);
  
    const toggleItem = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };
  
    return (
      <div className="w-full  mx-auto mt-10 space-y-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg shadow-sm"
          >
            <div
              className="flex justify-between items-center px-4 py-3 cursor-pointer  "
              onClick={() => toggleItem(index)}
            >
              <h3 className="text-lg font-medium">{item.title}</h3>
              <span className="text-xl">
                {activeIndex === index ? "-" : "+"}
              </span>
            </div>
            {activeIndex === index && (
              <div className="px-4 py-3 bg-slate-800" >
                <p className="text-white-700 text-left">{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    );
  };
  

const FAQ = () => {

    const accordionItems = [
        {
          title: "What is the role of a Campus Ambassador?",
          content:
            "Campus Ambassador will represent Kshitij, IIT Kharagpur in their colleges. They will be the first point of contact to any student who requires information about Kshitij. They would promote and motivate students to participate in the events conducted by Kshitij.",
        },
        {
          title: "Am I suitable to become a Cam us Ambassador?",
          content:
            "Yes. Any college student driven with enthusiasm is eligible to become a Campus Ambassador.",
        },
        {
          title: "How can I apply for the post of Campus Ambassador?",
          content:
            "Click on Sign Up and register. You will receive an email after successful registration. ",
        },
        {
          title: "What is the selection process?",
          content:
            "After you register through our website, you will have to go through a short telephonic interview before being selected ",
        },
        {
          title: "How many Campus Ambassadors are usually chosen from a particular college?",
          content:
            "One or more campus ambassadors are chosen depending on the size of the college and the number of students who have applied for the position. ",
        },
        {
          title: "How much time do I need to devote to Kshitij, IIT Kharagpur once selected as a Campus Ambassador",
          content:
            "There is no particular constraint on the number of hours per week that you need to devote. It may vary depending on the number of tasks allotted and how smartly and efficiently you perform it ",
        },
        
      ];


  return (
    <div>
    <h2 className='mt-20 text-3xl'>Frequently Asked Questions</h2>
 
        <Accordion items={accordionItems} />
    </div>
    
  )
}

export default FAQ

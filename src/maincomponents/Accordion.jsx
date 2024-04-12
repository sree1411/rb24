import React from 'react'
 
import ShowData from './ShowData'
const Accordion = () => {

    const datalist = [
        {
            question: "What payment methods do you accept?",
            answer: "We accept all major credit cards, bank transfers, and selected payment gateways such as PayPal and Stripe."
        },
        {
            question: "Do you offer any discounts for bulk purchases?",
            answer: "Yes, we offer discounts for bulk purchases depending on the quantity and the product type. Please contact our sales team for more details."
        },
        {
            question: "How can I contact customer service?",
            answer: "You can reach our customer service by emailing support@business.com or by calling us at 1-234-567-89 during business hours."
        },
        {
            question: "What are your hours of operation?",
            answer: "Our office is open Monday through Friday, from 9 AM to 5 PM. We are closed on weekends and public holidays."
        },
        {
            question: "What services do you offer?",
            answer: "We offer a wide range of business solutions including consultancy, project management, and software development tailored to your business needs."
        }
    ];
    



  return (
      <>
       

        <div className='accordion-section'>
            <div className='websitetext'>
              <p> Welcome to our website</p>
            </div>
        {
       
           
            datalist.map((item)=>{
                return <>

                     <ShowData item={item}/>
                   
                </>
            })
        }
          </div>
      
      </>
  )
}

export default Accordion
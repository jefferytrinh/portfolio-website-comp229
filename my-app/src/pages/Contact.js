function Contact() {
  return (
    <>
      <h2>CONTACT ME</h2>
      
      <div class="card">
        <h3>Ways To Reach Me</h3>
        <p>Feel free to reach out to me through the following methods:</p>
        <ul>
          <li>Email: <a href="mailto:jtrinh8@my.centennialcollege.ca">jtrinh8@my.centennialcollege.ca</a></li>
          <li>Phone: (123) 456-7890</li>
        </ul>
        <p>Alternatively, you can fill out the contact form below and I will get back to you as soon as possible.
        </p>
      </div>

      <div class="card">
        <h3>Contact Form</h3>
        <p>Fill out the form to contact me.</p>
        <form name="contactme" id="contactme" action="mailto:tjeff148@gmail.com" method="post">
          <table cellpadding="15" cellspacing="5" width="65%">
            <tr>
              <td>
                <label>Name: </label>
              </td>
              <td>
                <input type="text" size="50"></input>
              </td>
            </tr>

            <tr>
              <td>
                <label>Email: </label>
              </td>
              <td>
                <input type="email" size="50"></input>
              </td>
            </tr>

            <tr>
              <td colspan="2">
                <label>Message:</label><br />
                <textarea rows="5" cols="100"></textarea>
              </td>
            </tr>

            <tr>
              <td>
                <input type="submit" value="Click to submit"></input>
              </td>
              <td>
                <input type="reset" value="Click to reset form"></input>
              </td>
            </tr>

          </table>
        </form>
      </div>
    </>
  );
}

export default Contact;
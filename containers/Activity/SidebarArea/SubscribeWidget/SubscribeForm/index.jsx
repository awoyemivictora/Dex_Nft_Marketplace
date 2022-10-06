const SubscribeForm = () => {

  return (
    <>
      <div className="subscribe-form">
          <form action="#">
              <input type="email" name="email" id="subs_email" placeholder="Your Email" />
              <button type="submit" className="btn mb-0">subscribe</button>
          </form>
      </div>
    </>
  );
}

export default SubscribeForm;
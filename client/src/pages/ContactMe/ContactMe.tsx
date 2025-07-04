import { Link } from "react-router-dom";
import s from "./ContactMe.module.scss";
import { Controller, useForm } from "react-hook-form";
import useTelegramStore from "../../store/useTelegramStore";
import { useState } from "react";



interface FormData {
  name: string;
  surname: string;
  email: string;
  helpRequest: string;
  message: string;
  termsAccepted: boolean;
}

const ContactMe = () => {
  const ContactData = [
    {
      id: 1,
      ttl: "Address:",
      info: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    },
    {
      id: 2,
      ttl: "Email:",
      info: "nevaeh.simmons@example.com",
    },
    {
      id: 3,
      ttl: "Fax:",
      info: "(702) 555-0122",
    },
    {
      id: 4,
      ttl: "Work Hour:",
      info: "Mon - Sat: 9:00 - 18:00",
    },
  ];

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    getValues,
  } = useForm<FormData>({
    defaultValues: {
      name: "",
      surname: "",
      email: "",
      helpRequest: "",
      message: "",
      termsAccepted: false,
    },
  });

  const { sendTelegram } = useTelegramStore();

  const onSubmit = async (data: FormData) => {
    try {
      await sendTelegram({
        name: data.name,
        email: data.email,
        text: data.message,
      });

      setSubmissionSuccess(true); 
      reset({
        name: "",
        surname: "",
        email: "",
        helpRequest: "",
        message: "",
        termsAccepted: false,
      });

      setTimeout(() => setSubmissionSuccess(false), 3000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const toggleCheckbox = () =>
    setValue("termsAccepted", !getValues("termsAccepted"));

  const [submissionSuccess, setSubmissionSuccess] = useState(false);
  return (
    <section className={s.contactMe}>
      <div className={s.bottomContainer}>
        <div className={s.container}>
          <div className={s.info}>
            <h2 className={s.ttl}>Contact Me</h2>
            <h1 className={s.subttl}>Request Free Consultancy</h1>
          </div>

          <div className={s.overallContainer}>
            <div className={s.contact}>
              <div className={s.contactInfo}>
                <div className={s.hotline}>
                  <h2 className={s.hotlineTtl}>Hotline 24/7</h2>
                  <h1 className={s.hotlineNumber}>(+23) 5535 68 68</h1>
                </div>

                <div className={s.contactOverall}>
                  {ContactData.map((data) => (
                    <h3 key={data.id} className={s.contactDataTtl}>
                      {data.ttl}{" "}
                      <b className={s.contactDataInfo}>{data.info}</b>
                    </h3>
                  ))}
                </div>
              </div>
            </div>

            <form className={s.form} onSubmit={handleSubmit(onSubmit)}>
              <div className={s.ultimateContainer}>
                <div className={s.userInput}>
                  <div className={s.personInfo}>
                    <Controller
                      name="name"
                      control={control}
                      rules={{ required: "Name is required" }}
                      render={({ field }) => (
                        <input
                          {...field}
                          className={s.inp}
                          type="text"
                          placeholder="Name*"
                        />
                      )}
                    />
                    {errors.name && (
                      <p className={s.error}>{errors.name.message}</p>
                    )}

                    <Controller
                      name="email"
                      control={control}
                      rules={{
                        required: "Email is required",
                        pattern: {
                          value:
                            /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                          message: "Please enter a valid email address",
                        },
                      }}
                      render={({ field }) => (
                        <input
                          {...field}
                          className={s.inp}
                          type="email"
                          placeholder="Email Address*"
                        />
                      )}
                    />
                    {errors.email && (
                      <p className={s.error}>{errors.email.message}</p>
                    )}
                  </div>

                  <Controller
                    name="helpRequest"
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <input
                        {...field}
                        className={s.inp}
                        type="text"
                        placeholder="How can we help you?"
                      />
                    )}
                  />
                  {errors.helpRequest && (
                    <p className={s.error}>{errors.helpRequest.message}</p>
                  )}
                  <Controller
                    name="message"
                    control={control}
                    rules={{ required: "This field is required" }}
                    render={({ field }) => (
                      <textarea
                        {...field}
                        className={s.inpBig}
                        placeholder="Your Message"
                      />
                    )}
                  />
                  {errors.message && (
                    <p className={s.error}>{errors.message.message}</p>
                  )}
                </div>

                <div className={s.terms}>
                  <Controller
                    name="termsAccepted"
                    control={control}
                    rules={{
                      required: "You must accept the terms and conditions",
                    }}
                    render={({ field }) => (
                      <>
                        <input
                          {...field}
                          className={s.checkbox}
                          type="checkbox"
                          checked={!!field.value}
                          onChange={() => toggleCheckbox()}
                        />
                        <p className={s.agreement}>
                          By submitting, I agree to the{" "}
                          <Link className={s.link} to="/terms">
                            Terms & Conditions
                          </Link>
                        </p>
                      </>
                    )}
                  />
                  {errors.termsAccepted && (
                    <p className={s.error}>{errors.termsAccepted.message}</p>
                  )}
                </div>

                {submissionSuccess && (
                  <p className={s.successMessage}>
                    Your message was sent successfully!
                  </p>
                )}

                <button className={s.btn} type="submit">
                  Request Now
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMe;

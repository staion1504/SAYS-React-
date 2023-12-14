import React, { useState, useEffect } from "react";
import styles from "./Reviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar as solidStar,
  faStar as regularStar,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as farStar } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Review = () => {
  const movieobj = {
    imgurl:
      "https://s3.ap-south-1.amazonaws.com/media.hittvtelugu.com/wp-content/uploads/2023/11/hai.jpg",
  };
  const maxStars = 5;

  const reviewData = [
    {
      criticname: "Saiteja",
      criticmailid: "saiteja@gmail.com",
      criticimg: "https://cdn.wallpapersafari.com/46/60/uYOX0V.jpg",
      reviewdesc: "Excellent movie. Best acting deliverables.",
      rating: "5",
    },
    {
      criticname: "Mark",
      criticmailid: "mark@gmail.com",
      criticimg:
        "https://media.istockphoto.com/id/685132245/photo/mature-businessman-smiling-over-white-background.jpg?s=612x612&w=0&k=20&c=OJk6U-oCZ31F3TGmarAAg2jVli8ZWTagAcF4P-kNIqA=",
      reviewdesc:
        "A delicately handled story,the art of sensitive and sensible picturisation had touched a high watermark.Only complaint is that it could have been shorter by ~30 mins....",
      rating: "4.9",
    },
    {
      criticname: "Harry",
      criticmailid: "harry@gmail.com",
      criticimg:
        "https://t3.ftcdn.net/jpg/02/58/89/90/360_F_258899001_68CalsKTRk6PZQgWH9JhR4heBlncCko9.jpg",
      reviewdesc:
        "Good Film.Good Narrative Style.But the problem was Music & Songs are Not Good.Beyond that,it was the Screenplay that made we watch the film.Nani and Mrunal delivered Nice Performances.Overall Not Great But Good One😊....",
      rating: "3.4",
    },
    {
      criticname: "John",
      criticmailid: "john@gmail.com",
      criticimg:
        "https://media.istockphoto.com/id/1399565382/photo/young-happy-mixed-race-businessman-standing-with-his-arms-crossed-working-alone-in-an-office.webp?b=1&s=170667a&w=0&k=20&c=ZAXJYLesh6gSd9huAgpy6rjpR4z-IFVH9MpxrKIXCrs=",
      reviewdesc: "This movie is average :)",
      rating: "2.6",
    },
    {
      criticname: "Khan",
      criticmailid: "khan@gmail.com",
      criticimg:
        "https://hamariweb.com/profiles/images/profile/0242-674-13671.jpg",
      reviewdesc: "That is good.",
      rating: "1",
    },

    {
      criticname: "Radhika",
      criticmailid: "radhika@gmail.com",
      criticimg:
        "https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1702425600&semt=ais",
      reviewdesc: "Heart touching movie... Must watch",
      rating: "1",
    },
  ];

  return (
    <>
      <div className={styles.body}>
        <section id="testimonials">
          <div className={styles.testimonialHeading}>
            <span>Reviews</span>
            <div className={styles.profileImg1}>
              <img src={movieobj.imgurl} alt="" />
            </div>
          </div>
          <div className={styles.addcomment}>
            <form method="post">
              <div className={styles.addcomment}>
                <label htmlFor="comment">Add your Review</label>
                <span className={styles.comment_box}>
                  {" "}
                  <input
                    type="text"
                    name="review"
                    style={{ backgroundColor: "#221f1f", color: "white" }}
                  />
                </span>
              </div>

              <div className={styles.addrating}>
                <label htmlFor="rating">Add your Rating</label>
                <select id="rating" className={styles.rating} name="rating">
                  <option className={styles.option} value="1">
                    1
                  </option>
                  <option className={styles.option} value="2">
                    2
                  </option>
                  <option className={styles.option} value="3">
                    3
                  </option>
                  <option className={styles.option} value="4">
                    4
                  </option>
                  <option className={styles.option} value="5">
                    5
                  </option>
                </select>
                <button
                  className={styles.postButton}
                  style={{
                    position: "relative",
                    right: "30%",
                    backgroundColor: "#221f1f",
                    color: "gold",
                    cursor: "pointer",
                  }}
                  type="submit"
                >
                  Post
                </button>
              </div>
            </form>
          </div>

          <div className={styles.testimonialBoxContainer}>
            <div className={styles.testimonialBoxContainer}>
              {reviewData.map((review, index) => (
                <div key={index} className={styles.testimonialBox}>
                  <div className={styles.boxTop}>
                    <div className={styles.profile}>
                      <div className={styles.profileImg}>
                        <img src={review.criticimg} alt="User Profile" />
                      </div>
                      <div className={styles.nameUser}>
                        <strong>{review.criticname}</strong>
                        <span>{review.criticmailid}</span>
                      </div>
                    </div>
                    <div className={styles.reviews}>
                      {/* {[...Array(review.rating)].map((_, i) => (
                          <FontAwesomeIcon key={i} icon={solidStar} />
                        ))}
                        {[...Array(5 - review.rating)].map((_, i) => (
                          <FontAwesomeIcon key={i} icon={farStar} />
                        ))} */}
                      {[...Array(Math.floor(review.rating))].map((_, j) => (
                        <FontAwesomeIcon key={j} icon={solidStar} />
                      ))}
                      {review.rating % 1 !== 0 && (
                        <FontAwesomeIcon icon={farStar} />
                      )}
                      {[...Array(maxStars - Math.ceil(review.rating))].map(
                        (_, j) => (
                          <FontAwesomeIcon key={j} icon={farStar} />
                        )
                      )}
                    </div>
                  </div>

                  <div className={styles.clientComment}>
                    <p>{review.reviewdesc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <a className={styles.a} href="/movies">
           <Link to="/User/MoviesPage"><button className={styles.backbtn}>Back</button></Link>
          </a>
        </section>
      </div>
    </>
  );
};

export default Review;

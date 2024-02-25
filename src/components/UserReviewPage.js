import React from "react";
import { Container } from "react-bootstrap";
import UserReviewCard from "../components/UserReviewcard";
import userReviewData from "../data/userReviewData";
import { Reveal } from "./Reveal";

const UserReviewPage = () => {
  return (
    <Container>
      <Reveal>
        <div className="grid-system">
          {userReviewData.map((review) => (
            <div className="box-shadow " style={{ borderRadius: '16px' }} key={review.id}>
              <UserReviewCard
                userProfilePicture={review.userProfilePicture}
                reviewText={review.reviewText}
                userName={review.userName}
                starRating={review.starRating}
              />
            </div>
          ))}
        </div>
      </Reveal>
    </Container>
  );
};

export default UserReviewPage;

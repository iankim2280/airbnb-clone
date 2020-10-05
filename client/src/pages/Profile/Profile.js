import React from "react";
import styled from "styled-components";

const ProfileNav = styled.nav`
  margin: 0 auto;
  width: 80%;
`;
const PageNav = styled.nav`
  padding: 10px;
  display: block;
  span {
    font-weight: bold;
    font-size: 1.2rem;
  }
`;

const ProfileTitle = styled.div`
  font-weight: bold;
  font-size: 3rem;
`;
const Profile = () => {
  return (
    <ProfileNav className="pd-20">
      <div>
        <PageNav className="pageNav">
          <span>
            <a href="/account">Account </a>
          </span>
          <span>
            - <a href="account.html">Profile</a>{" "}
          </span>
        </PageNav>
        <ProfileTitle className="pageTitle">Personal info</ProfileTitle>
      </div>
      <main className="personalInfoMain">
        <div className="personalInfoLeft mg-t-20">
          <section className="personalInfoBox">
            <ul>
              <li className="infoBoxLeft">
                <p className="userName">Legal Name</p>
                <div className="userNameAnswer">Kim Ian</div>
              </li>
              <li className="editBox">
                <span>Edit</span>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <ul>
              <li className="infoBoxLeft">
                <p className="userName">Legal name</p>
                <div className="userNameAnswer">Kim Ian</div>
              </li>
              <li className="editBox">
                <span>Edit</span>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <ul>
              <li className="infoBoxLeft">
                <p className="userName">Gender</p>
                <div className="userNameAnswer">Not specified</div>
              </li>
              <li className="editBox">
                <span>Edit</span>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <ul>
              <li className="infoBoxLeft">
                <p className="userName">Date of birth</p>
                <div className="userNameAnswer">May 1</div>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <ul>
              <li className="infoBoxLeft">
                <p className="userName">Emgail address</p>
                <div className="userNameAnswer">camelkish1@gmail.com</div>
              </li>
              <li className="editBox">
                <span>Edit</span>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <ul>
              <li className="infoBoxLeft">
                <p className="userName">Phone number</p>
                <div className="userNameAnswer">123-456-7890</div>
              </li>
              <li className="editBox">
                <span>Edit</span>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <ul>
              <li className="infoBoxLeft">
                <p className="userName">Legal Name</p>
                <div className="userNameAnswer">Kim Ian</div>
              </li>
              <li className="editBox">
                <span>Edit</span>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <ul>
              <li className="infoBoxLeft">
                <p className="userName">Government ID</p>
                <div className="userNameAnswer">
                  We’re unable to confirm this ID belongs to you. You may remove
                  it and try again or continue by taking a picture of yourself.
                </div>
                <div>
                  <button className="button is-primary">
                    Continue verification
                  </button>
                </div>
              </li>
              <li className="editBox">
                <span>Remove</span>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <ul>
              <li className="infoBoxLeft">
                <p className="userName">Address</p>
                <div className="userNameAnswer">Not provided</div>
              </li>
              <li className="editBox">
                <span>Edit</span>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <ul>
              <li className="infoBoxLeft">
                <p className="userName">Emergency contact</p>
                <div className="userNameAnswer">Not provided</div>
              </li>
              <li className="editBox">
                <span>Add</span>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <ul className="lastInfoBox">
              <li className="infoBoxLeft">
                <p className="userName">Passport info for China travel</p>
                <div className="userNameAnswer">Not provided</div>
              </li>
              <li className="editBox">
                <span>Add</span>
              </li>
            </ul>
          </section>
          <section className="personalInfoBox">
            <div className="infoCard1 pd-15">
              <i className="fa fa-code" aria-hidden="true"></i>
              <p className="title is-5">What info is shared with others?</p>
              <p>
                Airbnb only releases contact information for hosts and guests
                after a reservation is confirmed.
              </p>
            </div>
          </section>
        </div>
        <div className="personalInfoRight">
          <div className="infoCard2 pd-15">
            <i className="fa fa-code" aria-hidden="true"></i>
            <p className="title is-5">What info is shared with others?</p>
            <p>
              Airbnb only releases contact information for hosts and guests
              after a reservation is confirmed.
            </p>
          </div>
        </div>
      </main>
    </ProfileNav>
  );
};

export default Profile;

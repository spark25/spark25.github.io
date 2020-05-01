<template>
  <div class="home">
    <section class="showcase" id="home">
      <div class="leftSection">
        <div v-rellax="{ speed: 3 }" class="centerBrand">
          <p>Hello, My Name Is</p>
          <h1>Dr. Ajit B Deore</h1>
        </div>
        <div class="moto" v-rellax="{ speed: 3 }">
          <h1>Assistant Professor at MIT-WPU</h1>
          <v-btn depressed class="primary">Learn More</v-btn>
        </div>
      </div>
      <div class="vLine">
        <div class="line"></div>
      </div>
      <div class="rightSection">
        <img
          class="heroImage"
          v-rellax="{ speed: -3 }"
          src="../assets/ajitHeroColor.png"
          alt
          srcset
        />
      </div>
    </section>
    <main class="articleLayout">
      <section class="about sectionCard" id="about">
        <v-row>
          <v-col cols="12" sm="12" md="6" lg="6">
            <div class="sectionTitle">
              <h2>About Me</h2>
            </div>
            <div class="sectionOneliner">Teaching Professional</div>
          </v-col>
          <v-col cols="12" sm="12" md="6" lg="6">
            <div class="sectionContent">
              <v-icon left color="primary">mdi-format-quote-open-outline</v-icon>
              <p>
                <v-icon left large color="primary">mdi-format-quote-open</v-icon>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos magnam vero saepe aspernatur. In quae ut veritatis ab, totam officiis iure aut eaque obcaecati minima nisi! Ullam cupiditate distinctio nesciunt culpa dolores suscipit dicta doloribus quam aut placeat aspernatur maiores laborum odit iure, dolorum facere et molestiae sequi accusamus inventore eveniet perferendis eum impedit libero! Impedit porro numquam dolorum id optio laboriosam voluptatum ut cum officiis vero ab animi voluptatibus illum necessitatibus cumque doloremque culpa, omnis quisquam. A, ipsum animi.
              </p>
            </div>
          </v-col>
        </v-row>
      </section>

      <!-- Experience -->
      <section class="sectionCard" id="experience">
        <v-sheet tile class="varticalCard" min-height="300">
          <div class="sectionTitle">
            <h2>Experience</h2>
          </div>
          <div class="sectionOneliner">19 Years of Teaching Experience</div>
          <v-card-text class="px-4">
            <v-timeline>
              <v-timeline-item v-for="(year, i) in years" :key="i" :color="year.color" small>
                <template v-slot:opposite>
                  <span :class="`title font-weight-medium ${year.color}--text`" v-text="year.year"></span>
                </template>
                <div class="py-4">
                  <h2 :class="`title font-weight-medium mb-1 ${year.color}--text`">{{year.title}}</h2>
                  <div>
                    <p>{{year.subject}}</p>
                    <p>{{year.info}}</p>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-sheet>
      </section>

      <!-- Education -->
      <section class="sectionCard" id="education">
        <v-sheet tile class="varticalCard" min-height="300">
          <div class="sectionTitle">
            <h2>Academics</h2>
          </div>
          <div class="sectionOneliner">19 Years of Teaching Experience</div>
          <v-card-text class="px-4">
            <v-timeline>
              <v-timeline-item v-for="(edu, i) in education" :key="i" :color="edu.color" small>
                <template v-slot:opposite>
                  <span :class="`title font-weight-medium ${edu.color}--text`" v-text="edu.year"></span>
                </template>
                <div class="py-4">
                  <h2 :class="`title font-weight-medium mb-1 ${edu.color}--text`">{{edu.title}}</h2>
                  <div>
                    <p>{{edu.subject}}</p>
                    <p>{{edu.info}}</p>
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </v-card-text>
        </v-sheet>
      </section>

      <!-- contact -->
      <section class="sectionCard success mb-12" id="contact">
        <v-sheet tile class="varticalCard success" min-height="300">
          <div class="sectionTitle white--text">
            <h2>Contact</h2>
          </div>
          <div class="sectionOneliner white--text">Get In Touch</div>
          <v-card-text class="px-4">
            <v-row class="align-center">
              <v-col class="d-flex align-center justify-center flex-column pa-4 white--text">
                <v-icon large  color="grey darken-3">mdi-map-marker</v-icon>
                <p style="text-align:center">
                  Maharashtra Institute of Technology (MIT)
                  S.No.124, Paud Road, Kothrud,
                  Pune 411038
                  Maharashtra INDIA
                </p>
              </v-col>
              <v-divider vertical class="white"></v-divider>
              <v-col class="d-flex justify-center flex-column pa-4 white--text">
                <p> <v-icon left color="grey darken-3">mdi-cellphone-android</v-icon>+91-9999999999</p>
                <p> <v-icon left color="grey darken-3">mdi-email-outline</v-icon>ajit.deore@mitwpu.edu.in</p>
              </v-col>
            </v-row>
          </v-card-text>
        </v-sheet>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      years: [
        {
          color: "primary",
          year: "2003-Present",
          title: "Assistant Professor",
          subject: "Enginnering Physics",
          info:
            "MIT World Peace University. Teaching Experience at MIT & MITWPU : 17 Years"
        },
        {
          color: "primary",
          year: "1998-1999",
          title: "Lecturer",
          subject: "Physics",
          info: "Arts Science College ,Dhule  Experience : 1.9 Years"
        }
      ],
      education: [
        {
          color: "primary",
          year: "2013",
          title: "Ph.D",
          subject:
            "Study of corrosion prohibition properies of Polyaniline Coating on steel",
          info: "Institute Name"
        },
        {
          color: "primary",
          year: "1996",
          title: "Post Graduation",
          subject: "North Maharashtra University, Jalgaon",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        },
        {
          color: "primary",
          year: "1994",
          title: "Graduation",
          subject: "North Maharashtra University, Jalgaon",
          info:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
        }
      ]
    };
  },
  methods: {
    headObserver() {
      const header = document.querySelector(".topHeader");
      const showcase = document.querySelector(".showcase");
      const options = {
        rootMargin: "-100px 0px 0px 0px"
      };
      const showcaseObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            header.classList.add("solidHeader");
          } else {
            header.classList.remove("solidHeader");
          }
        });
      }, options);
      showcaseObserver.observe(showcase);
    },
    brandObserver() {
      const header = document.querySelector(".topHeader");
      const brand = document.querySelector(".showcase");
      const options = {
        rootMargin: "-30px 0px 0px 0px"
      };
      const brandObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            header.classList.add("showBrand");
          } else {
            header.classList.remove("showBrand");
          }
        });
      }, options);
      brandObserver.observe(brand);
    }
  },
  mounted() {
    this.headObserver();
    this.brandObserver();
  },
  created() {
    this.clients = this.$store.state.clients;
  }
};
</script>
<style lang="scss">
.showcase {
  height: 100vh;
  width: 100%;
  //  background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
  background: url("~../assets/bookDark.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  // flex-direction: column;
  // align-items: center;
  justify-content: center;
  z-index: 2;
  overflow: hidden;
  @include sm {
    flex-direction: column;
  }
  // @include md {
  //   flex-direction: column;
  // }

  .leftSection {
    display: flex;
    flex-direction: column;
    align-items: end;
    align-items: flex-end;
    justify-content: center;
    box-sizing: border-box;
    padding-right: 2rem;
    flex: 1;
    // background-image: linear-gradient(-20deg, #2b5876 0%, #4e4376 100%);
    @include sm {
      order: 3;
      padding-top: 1rem;
    }

    .centerBrand {
      color: #f5f5f5;
      text-align: right;
      p {
        font-size: 1.5rem;
      }
      h1 {
        font-family: "Damion", sans-serif;
        font-size: 3rem;
      }
      @include sm {
        p {
          font-size: 0.9rem;
        }
        h1 {
          font-size: 2rem;
        }
      }
      @include md {
        p {
          font-size: 1rem;
        }
        h1 {
          font-size: 2.5rem;
        }
      }
    }
    .moto {
      color: #eee;
      display: flex;
      // justify-content: space-around;
      flex-direction: column;
      text-align: right;
      align-items: end;
      align-items: flex-end;
      position: relative;
      margin-top: 1rem;

      h1 {
        font-size: 2rem;
        // font-family: "Oswald", sans-serif;
      }
      @include sm {
        h1 {
          font-size: 1rem;
        }
      }
      @include md {
        h1 {
          font-size: 1.5rem;
        }
      }
    }
    blockquote {
      border-radius: 4px;
      margin-top: 3rem;
      .material-design-icon {
        color: #fff;
      }
      p {
        color: #f5f5f5;
        font-size: 1rem;
        font-weight: 500;
      }
    }

    button {
      margin-top: 3rem;
      width: fit-content;
    }
  }

  .vLine {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 1rem;
    @include sm {
      order: 2;
    }

    .line {
      width: 5px;
      height: 60%;
      @include sm {
        width: 60%;
        height: 5px;
      }
      background: #5f27cd;
      // background: #fff;
      border-radius: 10px;
    }
  }

  .rightSection {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding-left: 2rem;
    @include sm {
      padding: 4rem 4rem 0 4rem;
    }
    .heroImage {
      border-radius: 50%;
      width: 40vmin;
      height: 40vmin;
    }

    @include sm {
      order: 1;
    }
  }
}

.sectionCard {
  border-radius: 14px;
  background: #ffffff;
  box-shadow: 29px 29px 59px #d9d9d9, -29px -29px 59px #ffffff;
  padding: 1rem;
  margin-top: 4rem;

  .sectionTitle {
    color: #5f27cd;
    h2 {
      font-family: "Oswald", sans-serif;
      font-weight: 400;
    }
  }
  .sectionOneliner {
    font-size: 1.5rem;
  }
}

.articleLayout {
  display: grid;
  grid-template-columns:
    minmax(1.2rem, 1fr)
    minmax(auto, 110ch)
    minmax(1.2rem, 1fr);

  section {
    grid-column: 2;
  }
}

.gallaryImg {
  height: 200px;
  overflow: hidden;
  position: relative;
  img {
    transition: all 0.3s;
    // &:hover{
    //   transform: scale(1.2);
    // }
  }
  .gallaryImgOverlay {
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.466);
    transform: scale(0);
  }

  &:hover {
    img {
      transform: scale(1.2);
    }
    .gallaryImgOverlay {
      transform-origin: bottom;
      transform: scale(1);
    }
  }
}
</style>

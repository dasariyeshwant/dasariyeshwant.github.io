const skillsTemplate = document.createElement('template');
skillsTemplate.innerHTML = `
    <link href="./assets/fontawesome/css/all.css" rel="stylesheet"/>
    <style>
        .skills-section {
            background: #fafafa;
            padding-bottom: 20px;
            height: 100%;
        }
        h2 {
            background: #4675B8;
            margin: 0;
            width: 60%;
            text-align: center;
            padding: 15px;
            color: #ffffff;
        }
        .skills-header {
            padding: 35px 0 0;
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
        .skills-header p {
            font-size: 0.7rem;
            font-weight: 700;
            text-align: right;
            border-bottom: 1px solid #FBBC05;
            color: #FBBC05;
        }
     
        .skills-notes {
            margin: 40px 0 20px;
            background: #4675B8;
            padding-top: 0 5%;
            font-size: 0.7rem;
            color: #ffffff;
            text-align: center;
        }

        .skill-btn-group {
            display: flex;
            justify-content: flex-end;
            padding-right: 50px;
        }

        .skill-btn-group button {
            background: transparent;
            border: none;
            cursor: pointer;
        }
        .pause-btn, .play-btn {
            font-size: 2rem;
        }

        @media only screen and (min-width: 600px) {
            h2 {
                width: 50%;
            }
            .skills-header p {
                font-size: 0.8rem;
            }
            .skills-notes {
                font-size: 0.8rem;
            }
        }
        @media only screen and (min-width: 768px) {
            h2 {
                width: 40%;
            }
            
        }
        @media only screen and (min-width: 992px) {
            h2 {
                width: 30%;
            }
            .skills-header p {
                font-size: 1rem;
            }
            .skills-notes {
                font-size: 1rem;
            }
        }
    </style>

    <div class="skills-section">
        <div class="skills-header">
            <h2>Skills</h2>
        </div>
        <div id="chart-container"></div>
        <div class="skill-btn-group">
            <button type="button" id="pause-btn"><i class="fa fa-solid fa-circle-pause pause-btn"></i></button>
            <button type="button" id="play-btn"><i class="fa fa-solid fa-circle-play play-btn"></i></button>
        </div>
        <p class="skills-notes">Other Skills such as Redux, Webpack and supporting javascript libraries and tools have not been mentioned above.</p>
    </div>
`;

class Skills extends HTMLElement {
    

    constructor() {
        super();
        this.skillSetData = [
            {
                year: 2013,
                skills: [
                    {
                        name: 'HTML/CSS',
                        proficiency: 3
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 2
                    },
                    {
                        name: 'JQuery',
                        proficiency: 3
                    },
                    {
                        name: 'PHP',
                        proficiency: 2
                    },
                    {
                        name: 'Java',
                        proficiency: 1
                    },
                    {
                        name: 'Photoshop',
                        proficiency: 2
                    }
                ]
            
            }, {
                year: 2014,
                skills: [
                    {
                        name: 'HTML/CSS',
                        proficiency: 4
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 2
                    },
                    {
                        name: 'JQuery',
                        proficiency: 4
                    },
                    {
                        name: 'PHP',
                        proficiency: 3
                    },
                    {
                        name: 'Angular',
                        proficiency: 1
                    },

                    {
                        name: 'MongoDb',
                        proficiency: 3
                    }
                ]
            },
             {
                year: 2015,
                skills: [
                    {
                        name: 'HTML/CSS',
                        proficiency: 5
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 3
                    },
                    {
                        name: 'JQuery',
                        proficiency: 5
                    },
                    {
                        name: 'Angular',
                        proficiency: 3
                    },
                    {
                        name: 'NodeJs',
                        proficiency: 2
                    },
                    {
                        name: 'MongoDb',
                        proficiency: 3
                    }
                ]
            },
             {
                year: 2016,
                skills: [
                    {
                        name: 'HTML/CSS',
                        proficiency: 6
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 4
                    },
                    {
                        name: 'JQuery',
                        proficiency: 5
                    },
                    {
                        name: 'Angular',
                        proficiency: 6
                    },
                    {
                        name: 'NodeJs',
                        proficiency: 3
                    },
                    {
                        name: 'MongoDb',
                        proficiency: 4
                    }
                ]
            },
             {
                year: 2017,
                skills: [
                    {
                        name: 'HTML/CSS',
                        proficiency: 6
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 5
                    },
                    {
                        name: 'JQuery',
                        proficiency: 5
                    },
                    {
                        name: 'Angular',
                        proficiency: 7
                    },
                    {
                        name: 'NodeJs',
                        proficiency: 4
                    },
                    {
                        name: 'AEM',
                        proficiency: 2
                    }
                ]
            },
             {
                year: 2018,
                skills: [
                    {
                        name: 'HTML/CSS',
                        proficiency: 6
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 5
                    },
                    {
                        name: 'Angular',
                        proficiency: 6
                    },
                    {
                        name: 'NodeJs',
                        proficiency: 5
                    },
                    { 
                        name: 'React',
                        proficiency: 2
                    },
                    {
                        name: 'AEM',
                        proficiency: 4
                    }
                ]
            },
             {
                year: 2019,
                skills: [
                    {
                        name: 'HTML/CSS',
                        proficiency: 7
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 6
                    },
                    {
                        name: 'Angular',
                        proficiency: 5
                    },
                    {
                        name: 'NodeJs',
                        proficiency: 5
                    },
                    { 
                        name: 'React',
                        proficiency: 4
                    },
                    { 
                        name: 'AEM',
                        proficiency: 5
                    }
                ]
            },
             {
                year: 2020,
                skills: [
                    {
                        name: 'HTML/CSS',
                        proficiency: 8
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 7
                    },
                    {
                        name: 'NodeJs',
                        proficiency: 4
                    },
                    { 
                        name: 'React',
                        proficiency: 5
                    },
                    {
                        name: 'Redux',
                        proficiency: 4
                    },
                    {
                        name: 'React Testing Library',
                        proficiency: 4
                    }
                ]
            },
             {
                year: 2021,
                skills: [
                    {
                        name: 'HTML/CSS',
                        proficiency: 8
                    },
                    {
                        name: 'JavaScript',
                        proficiency: 7.5
                    },
                    {
                        name: 'NodeJs',
                        proficiency: 4
                    },
                    { 
                        name: 'React',
                        proficiency: 5
                    },
                    {
                        name: 'Redux',
                        proficiency: 6
                    },
                    {
                        name: 'React Testing Library',
                        proficiency: 4
                    }
                ]
            }
        ]

        this.colorCode = {
            'HTML/CSS': '#4e79a7',
            JavaScript: '#f28e2c',
            NodeJs: '#59a14f',
            React: '#af7aa1',
            Redux: '#edc949',
            AEM: '#e15759',
            Angular: '#008ec4',
            'React Testing Library': '#6636b4',
            JQuery: '#c30771',
            MongoDb: '#10a778'


        }
        this.yScale = '';
        this.xScale = '';
        this.svg = '';
        this.chartContainer = '';
        this.margin = { top: 60, right: 30, bottom: 30, left: 60};
        this.height = '';
        this.width = '';
        this.skillsLength = 0;
        this.barChartInterval = '';
        this.currentYear = 2013;
    }
    connectedCallback() {
        const shadowRoot = this.attachShadow({mode: 'open' });
        shadowRoot.appendChild(skillsTemplate.content.cloneNode(true));
        this.shadowRoot.getElementById('pause-btn')
            .addEventListener('click', () => this.pauseTimer());
        this.shadowRoot.getElementById('play-btn')
            .addEventListener('click', () => this.startTimer());
        this.displaySkills();
    }
    displaySkills() {
        // set up chart dimensions
        this.chartContainer = this.shadowRoot.getElementById('chart-container');
        const chartContainerWidth = this.chartContainer.getBoundingClientRect().width || 800;
        
        this.width = chartContainerWidth - this.margin.left - this.margin.right;
        this.height = 500 - this.margin.top - this.margin.bottom;

        // Create SVG container
        this.svg = d3.select(this.chartContainer)
        .append('svg')
        .attr('width', this.width + this.margin.left + this.margin.right)
        .attr('height', this.height + this.margin.top + this.margin.bottom)
        .append('g')
        .attr('transform', `translate(${this.margin.left}, ${this.margin.top})`);

        console.log('the range is: ', d3.range(6));

        // Add Initial bars for the first time
        this.updateBars(2013);
        this.updateAxis();
        this.startTimer();
        this.svg.append('text')
            .attr('class', 'year')
            .attr('x', this.width - 20)
            .attr('y', this.height)
            .attr('dy', '0.35em')
            .style('font-size', '2rem')
            .attr('text-anchor', 'end')
            .text(2013);
    }

    updateBars(year) {
        // Set up scales
        this.yScale = d3.scaleBand()
            .domain([])
            .range([0, this.height])
            .paddingInner(0.1)
            .paddingOuter(0.1);
        
        this.xScale = d3.scaleLinear()
            .domain([0, 10])
            .range([0, this.width]);

        const currentYearSkillData = this.skillSetData.find(data => data.year === year);
    

        // sort skills based on proficiency rating for the current year
        const {skills} = currentYearSkillData;
        skills.sort((a, b) =>  b.proficiency - a.proficiency);

        // update domain for yScale
        this.yScale.domain(skills.map((d) => d.name));

        const barGroups = this.svg.selectAll('.bar-group')
            .data(skills, d => d.name);

        // Enter new bar groups
        const bars = barGroups
            .join(enter => enter
                    .append('g')
                    .attr('class', 'bar-group')
                    .attr('width', d => this.xScale(d.proficiency))
                    .attr('transform', d => `translate(0, ${this.yScale(d.name)})`),
                update => update
                    .transition()
                    .duration(1000)
                    .attr('width', d => this.xScale(d.proficiency))
                    .attr('transform', d => `translate(0, ${this.yScale(d.name)})`),
                exit => exit
                    .transition()
                    .duration(800)
                    .remove()
                )    

        // Append multiple smaller bars to each bar
        const updatedBars = bars.selectAll('.bar')
            .data(d => Array.from({ length: Math.ceil(d.proficiency) }).fill(d))
            .join(enter => enter
                    .append('rect')
                    .attr('class', 'bar')
                    .attr('x', (d, i) => this.xScale(i))
                    .attr('width', (d, i) => this.xScale(1) - 1)
                    .attr('height', this.yScale.bandwidth())
                    .style('fill', d => this.colorCode[d.name] || 'steelblue')
                    .style('opacity', 0)
                    .transition()
                    .duration(1500)
                    .style('opacity', 1),
                update => update
                    .transition()
                    .duration(1000)
                    .attr('x', (d, i) => this.xScale(i))
                    .attr('width', (d, i) => this.xScale(1) - 1)
                    .attr('height', this.yScale.bandwidth()),
                exit => exit
                    .transition()
                    .duration(1000)
                    .style('opacity', 0)
                    .remove()
            );
        

        // Add labels inside the bar
        const labels = this.svg.selectAll('.label')
            .data(skills, d => d.name);
        
        labels.enter()
            .append('text')
            .attr('class', 'label')
            .attr('x', d => this.xScale(d.proficiency) - 20)
            .attr('y', d => this.yScale(d.name) + this.yScale.bandwidth() / 2)
            .attr('dy', '0.35em')
            .attr('text-anchor', 'end')
            .text(d => d.name)
            .merge(labels)
            .transition()
            .duration(1000)
            .attr('x', d => this.xScale(d.proficiency) - 20)
            .attr('y', d =>  this.yScale(d.name) + this.yScale.bandwidth() / 2)

        labels.exit().remove();

        // Add year
        this.svg.select('.year')
        .text(year);


    }

    // Add axes and labels
    updateAxis() {
        this.svg.append('g')
            .call(d3.axisLeft(this.yScale).tickSize(0))
            .selectAll('.tick text')
            .remove();

        this.svg.append('g')
            .call(d3.axisTop(this.xScale));

        this.svg.append("text")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - this.margin.left + 30)
            .attr("x", 0 - this.height / 2)
            .attr("dy", "1em")
            .style("text-anchor", "middle")
            .text("Skill");
            
        this.svg.append("text")
            .attr("x", this.width / 2)
            .attr("y", 0 - this.margin.top + 30)
            .style("text-anchor", "middle")
            .text("Proficiency Rating (0-10) for top 6 most used skills in a calender year");

       
    }

    startTimer() {
        this.barChartInterval = d3.interval(() => {
            this.currentYear++;
            if (this.currentYear > 2021) {
                this.pauseTimer();
                this.currentYear = 2013;
            } else {
                this.updateBars(this.currentYear);
            }
            // this.updateAxis();
        }, 1500);
    }

    pauseTimer() {
        this.barChartInterval.stop();
    }

}
customElements.define('skills-section', Skills);

<template lang="html">
  <section id="section-1">
	<div class="text-center">
		<div class="section-title">
			LAW ENFORCEMENT
		</div>
		<div><i class="fa fa-angle-down fa-2x" style="color: #fff; margin-top: -20px;" aria-hidden="true"></i></div>
	</div>
	<div id="cd-timeline-1" class="cd-container">
		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-bullhorn">
				<i class="fa fa-bullhorn fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
				<h2>Overdose Reversal</h2>
				<p>In Illinois, heroin-related deaths rose from 149 to 681 between 2010 and 2014, with significant increases in Cook County (CDC Opioid Overdose State Data, 2016). With the rise in heroin and opioid use and overdoses, Illinois passed the Heroin Crisis Act in 2014 [20 ILCS 301/5-23], requiring police officers and other first responders to carry Naloxone—an opioid antagonist used to counter effects of opioid overdose—to help prevent fatal overdoses. Naloxone (also known by the brand name Narcan) is a medicine that is administered by nasal spray or injection to reverse an opioid overdose. Naloxone cannot be used to get the same effects as heroin, and is not addictive. Emergency medical professionals have used it for decades. The Heroin Crisis Act also allows pharmacies to dispense naloxone to individuals without a prescription. More than 220 law enforcement agencies in 24 states carry Naloxone to help prevent fatal overdoses of opioid.
</p>

<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong1">
  Read More
</button>



			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-child">
				<i class="fa fa-child fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
				<h2>Pre-Arrest Diversion</h2>
				<p>In 2015, drug offenses accounted for 99,953 arrests in 2015 in Illinois (Illinois State Police, 2015). Pre-arrest diversion provides the ability to individuals with substance use disorders to receive help, prior to entry into the criminal justice system. The first program of this kind is the ANGEL program out of Gloucester, Massachusetts. Individuals with substance use disorders—without fear of arrest—can voluntarily turn in drugs and drug paraphernalia and is provided assistance in receiving substance abuse treatment (PAARI, 2016). Law enforcement agencies in Dixon, Fairview Heights, Lee County, Rolling Meadows, Whiteside County, Rock Falls, Morrison, and Sterling have partnered with Police Assisted Addiction and Recovery Initiative (PAARI). In 2015, the Dixon Police Department and the Lee County Sheriff’s Department created the Safe Passage initiative serving Lee, Livingston, and Whiteside Counties. In Lake County, Mundelein Police Department, in addition to others, created A Way Out initiative for pre-arrest diversion.
</p>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong2">
  Read More
</button>
				<!-- <span class="cd-date">Jan 18</span> -->
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-bullhorn">
				<!-- <img src="img/cd-icon-picture.svg" alt="Picture"> -->
				<i class="fa fa-bullhorn fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
				<h2>Post-Arrest, Pre-Booking Diversion </h2>
				<p>This type of drug diversion provides police with the opportunity to deflect low-level drug offenders from incarceration via diversion into community-based treatment services (Beckett, 2014). The first program of its kind, Law Enforcement Assisted Diversion (LEAD), comes out of Seattle, Washington, created October 2011. The goal of LEAD is to reduce recidivism and lower the monetary costs for the criminal justice system that are associate Red with conventional police practices (Collins, Lonczak, & Clifasefi, 2015). In order to accomplish this goal, LEAD provides its participants with resources ranging from case management and housing counsel to job-search support and drug and alcohol treatment.
</p>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong3">
  Read More
</button>
				<!-- <span class="cd-date">Jan 24</span> -->
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-child">
				<i class="fa fa-child fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
				<h2>Title of section 4</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum aut hic quasi placeat iure tempora laudantium ipsa ad debitis unde? Iste voluptatibus minus veritatis qui ut.</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong4">
          Read More
        </button>
				<!-- <span class="cd-date">Feb 14</span> -->
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->

		<div class="cd-timeline-block">
			<div class="cd-timeline-img cd-bullhorn">
				<i class="fa fa-bullhorn fa-2x" aria-hidden="true"></i>
			</div> <!-- cd-timeline-img -->

			<div class="cd-timeline-content">
				<h2>Title of section 5</h2>
				<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto, optio, dolorum provident rerum.</p>
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLong5">
          Read More
        </button>
				<!-- <span class="cd-date">Feb 18</span> -->
			</div> <!-- cd-timeline-content -->
		</div> <!-- cd-timeline-block -->


	</div> <!-- cd-timeline -->



  <!-- Iterate through modal objects -->

  <div v-for="item in modalMap">
    <modal-helper :id="item.id">

      <div slot="title">
        {{item.title}}
      </div>

      <div slot="body" v-html="item.body"></div>

    </modal-helper>
  </div>



</section>

</template>

<script>
import {
    modalMap
} from '@/modals'

import ModalHelper from '@/components/ModalHelper'

export default {
  components: {
      ModalHelper,


  },
  data() {
      return {
          modalMap,
      }
  },
}
</script>

<style lang="css">
</style>

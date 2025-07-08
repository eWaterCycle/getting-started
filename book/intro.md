# Getting Started With eWaterCycle

Welcome to eWaterCycle!
The [why](https://www.ewatercycle.org/getting-started/main/some_content/why.html), [what](https://www.ewatercycle.org/getting-started/main/some_content/why/what.html) and [so what](https://www.ewatercycle.org/getting-started/main/some_content/why/sowhat.html) explain what the platform is in more detail.
The quick version; eWaterCycle is a platform for hydrological modelling developed by hydrologists and research software engineers.
This is done to take away interoperability/compatibility issues from the hydrologists, so they can perform their research more easily.
We also offer an easy way to generate the forcing data for your model, we standardized the workflow for generating forcing and host ERA5 data ourselves.

The workflow of eWaterCycle, usually, goes as follows:

$
\text{Choose region & design experiment} \rightarrow \text{get forcing} \rightarrow \text{setup model} \rightarrow \text{analyse results}
$

First in designing your experiment you need to think about the model(s) you want use.
This defines the 2 essential steps in eWaterCycle: getting the forcing data & running the models.
The input for different models differ, a quick example of using eWaterCycle can be found [here](https://www.ewatercycle.org/getting-started/main/some_content/first_model_run.html), and it is recommended that you start here.
It explains the default workflow quickly and from there you can make alterations.

Once you understand the basics you [change the region](link naar shapefiles) and change the model you use.
For advanced workflows one can also couple models.

More info on the different models that we support and what they need can be found [here]().
Generating the forcing data is done shown [here](). 
This is the same for every model only the user needs to know what type of forcing and variables are needed for their chosen model(s).
After the forcing is generated the user can use different workflows, explained [here]().

### Youtube video of eWaterCycle 1.0 (currently 2.4)
[![Youtube video of eWaterCycle 1.0 (currently 2.4)](https://img.youtube.com/vi/eE75dtIJ1lk/0.jpg)](https://www.youtube.com/watch?v=eE75dtIJ1lk)


## Contents
[TO DO]
- Why eWaterCycle?
  - What is eWaterCycle?
  - So Why Use eWaterCycle?
- First Model Run
  - Interface
  - Hello World: Running an HBV Model
- Different Forcing Data Generation
  - Caravan forcing data
  - ERA5 reanalysis
    - Shapefile you made yourself
    - Shapefile from Caravan dataset
  - CMIP6 historical data
  - CMIP6 future data
  - Manual data input
- Different Models
  - HBV
  - PCRGlobWB
  - Wflow
- Workflows
  - Default Workflow
    - Discharge
      - Flooding
      - Drought
  - Climate change
    - Regional
    - Study of a Bigger Area
  - Calibrating Models
    - HBV
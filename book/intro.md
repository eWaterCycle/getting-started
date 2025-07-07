# Getting Started With eWaterCycle

The workflow of eWaterCycle, usually, goes as follows:
$
\text{Choose region & design experiment} \rightarrow \text{get forcing} \rightarrow \text{setup model} \rightarrow \text{analyse results}
$
There are 3 essential steps in eWaterCycle: getting the forcing data, running the models & analysing the results.
But first in designing your experiment you need to think about the model(s) you will use.
More info on the different models that we support and what they need can be found [here]().
Generating the forcing data is done shown [here](). 
This is the same for every model only the user needs to know what type of forcing and variables are needed for their chosen model(s).
After the forcing is generated the user can use different workflows, explained [here]().

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
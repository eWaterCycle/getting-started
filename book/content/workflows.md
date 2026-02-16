# Different Types of Workflows

Here we will link to research applications using eWaterCycle v2.4.
These are examples of workflows, they might not work with the current version of eWaterCycle.

The workflows are work that has been done using eWaterCycle, and is provided here to help you kickstart your research!
Here is a quick overview:

## Running a Model

### Flooding

Using CMIP6 future data together with a calibrated HBV model, Thirza van Esch did research into the flooding of the Wien River.
As part of [her BSc thesis](https://www.ewatercycle.org/projects/main/thesis_projects/BSc/2025_Q3_ThirzaVanEsch_CEG/BSc_ThirzaVanEsch.html).

### Droughts

Using a calibrated HBV model with CMIP 6 future data, Ischa Hollemans looked at droughts of the Loire River.
As part of [his BSc thesis](https://www.ewatercycle.org/projects/main/thesis_projects/BSc/2025_Q3_IschaHollemans_CEG/BSc_IschaHollemans.html).

### Climate Change

[Being worked on]

## Calibrating Models

### HBV

[Here](https://www.ewatercycle.org/projects/main/thesis_projects/BSc/2025_Q3_ThirzaVanEsch_CEG/Report/CHAPTER3OVER.html#calibration) Thirza van Esch used RMSE and the Nelder-Mead optimization to calibrate her HBV model for floodings.

## Comparisons

### 1 Model, Multiple Forcings

In a climate change analysis we use multiple forcings with the same HBV model.
The model is calibrated on the ERA5 dataset as input data which is checked against the discharge that is provided by the CAMELS dataset.
This calibrated HBV model is then used together with CMIP6 climate scenarios, and the results are analyzed.
See the results [here](https://www.ewatercycle.org/projects/main/thesis_projects/Research/eWaterCycle-ClimateChangeImpact/second_results/hysets_02481510/step_4_analyse_executed.html).

### 1 Forcing, Multiple Models

[Being worked on]

## Model Coupling

[Being worked on]

## Data Assimilation

Dr. Jerom Aerts has used Data Assimilation (DA) to implement an uncertainty-aware model evaluation framework within eWaterCycle to assess hydrological model performance while explicitly accounting for discharge observation uncertainty. 
Using 299 catchments from CAMELS-GB, he demonstrated that many apparent improvements from calibration or model differences fall within observational uncertainty bounds, underscoring the need for uncertainty-aware approaches such as data assimilation.
This can be found [here](https://hess.copernicus.org/articles/28/5011/2024/) and [here2](https://research-portal.uu.nl/en/publications/on-the-importance-of-discharge-observation-uncertainty-when-inter/).
With his code here on [GitHub](https://github.com/jeromaerts/CAMELS-GB_Comparison_Uncertainty).


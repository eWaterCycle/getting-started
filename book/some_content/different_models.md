# Different Models

Here we will show you the different models that are available in eWaterCycle and what their needs and benefits are.
**NOTE** the following notebooks are from their respective GitHub pages and are not meant for this getting started guide specifically.

## HBV 

HBV (Hydrologiska Byråns Vattenbalansavdelning) is a conceptual hydrological model. For more information on its history, see this [paper](https://hess.copernicus.org/articles/26/1371/2022/).
The actual model implemented here sit looks most like the original model from [1976](https://urn.kb.se/resolve?urn=urn:nbn:se:smhi:diva-5738).

The model simplifies the entire water cycle into a few key processes and splits them up in five buckets:
- Snow
- Interception
- Soil moisture
- Slow saturation zone
- Fast saturation zone

These buckets can be seen as reservoirs that store water and release it based on the catchment characteristics.


![HBV schematic](../figures/hbv/hbv_schematic.png)
*A retrospective on hydrological catchment modelling based on half a century with the HBV model. https://hess.copernicus.org/articles/26/1371/2022/*


The structure of the HBV model is shown below.

![model hbv](../figures/hbv/hbv_model_label.png)
*Image from the TU Delft course ENVM1502 - "River Basin Hydrology" by Markus Hrachowitz.*

With the abbreviations:

<table border="0" cellpadding="10" cellspacing="0">
  <tr>
    <!-- Reservoirs Section -->
    <td valign="top">
      <table border="1" cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th colspan="2">HBV Model Reservoirs</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Sp</td><td>Snow reservoir</td></tr>
          <tr><td>Si</td><td>Interception reservoir</td></tr>
          <tr><td>Su</td><td>Unsaturated reservoir</td></tr>
          <tr><td>Sf</td><td>Fast reservoir</td></tr>
          <tr><td>Ss</td><td>Slow reservoir</td></tr>
        </tbody>
      </table>
    </td>
    <!-- Inputs Section -->
    <td valign="top">
      <table border="1" cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th colspan="3">HBV Model Inputs</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>P</td><td>Precipitation</td><td>mm/day</td></tr>
          <tr><td>Ep</td><td>Potential evaporation</td><td>mm/day</td></tr>
          <tr><td>T</td><td>Temperature</td><td>°C</td></tr>
        </tbody>
      </table>
    </td>
    <!-- Parameters Section -->
    <td valign="top">
      <table border="1" cellpadding="5" cellspacing="0">
        <thead>
          <tr>
            <th colspan="3">HBV Model Parameters</th>
          </tr>
          <tr>
            <th>Code</th>
            <th>Description</th>
            <th>Units</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Imax</td><td>Interception capacity</td><td>mm</td></tr>
          <tr><td>Ce</td><td>Soil runoff coefficient</td><td>-</td></tr>
          <tr><td>Sumax</td><td>Max soil moisture storage</td><td>mm</td></tr>
          <tr><td>Beta</td><td>Shape parameter for runoff generation</td><td>-</td></tr>
          <tr><td>Pmax</td><td>Percolation threshold</td><td>mm/day</td></tr>
          <tr><td>Tlag</td><td>Routing lag time</td><td>days</td></tr>
          <tr><td>Kf</td><td>Fast runoff recession coefficient</td><td>1/day</td></tr>
          <tr><td>Ks</td><td>Slow runoff recession coefficient</td><td>1/day</td></tr>
          <tr><td>Fm</td><td>Snowmelt factor</td><td>-</td></tr>
        </tbody>
      </table>
    </td>
  </tr>
</table>



### Benefits

- easy/fast to use
- allows for ...

### Outputs

- daily discharge

### Model Needs

- Forcing:
  - Precipitation
  - Incoming solar radiation
  - Temperature
- Calibration parameters:
  - Imax: Interception capacity
  - Ce: Soil runoff coefficient
  - Sumax: Max soil moisture storage
  - Beta: Shape parameter for runoff generation
  - Pmax: Percolation threshold
  - Tlag: Routing lag time
  - Kf: Fast runoff recession coefficient
  - Ks: Slow runoff recession coefficient
  - Fm: Snowmelt factor

## PCRGlobWB 

PCRGlobWB (PCRaster Global Water Balance) is a large-scale hydrological model with official [documentation](https://globalhydrology.nl/research/models/pcr-globwb-1-0/).

### Benefits


### Outputs


### Model Needs



## Wflow

Let us start with the documentation of Wflow, which is available [here](https://wflow.readthedocs.io/en/latest/).

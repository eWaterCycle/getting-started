# Generating Forcing Data

There are different ways to get forcing data for your model run that are supported by eWaterCycle.
They also differ per model, so you will have to check the documentation of the model you want to use.

Every model needs forcing data, there are several possible ways to get this forcing data:
- Camels Forcing using Caravan
- ERA5 reanalysis
  - Shapefile you made yourself
  - Shapefile from Caravan dataset
- CMIP6 historical data
- CMIP6 future data
- Manual data input

eWaterCycle supports different types of forcings, currently it supports:

<table style="width:100%; border-collapse:collapse; text-align:center;">
  <tr>
    <td style="border:1px solid black;">CaravanForcing</td>
    <td style="border:1px solid black;">DistributedMakkinkForcing</td>
    <td style="border:1px solid black;">DistributedUserForcing</td>
    <td style="border:1px solid black;">GenericDistributedForcing</td>
  </tr>
  <tr>
    <td style="border:1px solid black;">GenericLumpedForcing</td>
    <td style="border:1px solid black;">HypeForcing</td>
    <td style="border:1px solid black;">LisfloodForcing</td>
    <td style="border:1px solid black;">LumpedMakkinkForcing</td>
  </tr>
  <tr>
    <td style="border:1px solid black;">LumpedUserForcing</td>
    <td style="border:1px solid black;">MarrmotForcing</td>
    <td style="border:1px solid black;">PCRGlobWBForcing</td>
    <td style="border:1px solid black;">WflowForcing</td>
  </tr>
</table>


The type of forcing needed is model dependent!

The forcing object in eWaterCycle has some properties:
- start time
- end time
- directory, which is a path
- shapefile, also a path pointing to the shapefile, it also needs the accompanying files (so .shp + .cpg, .prj, .dbf, .shx)
- filenames, a dictionary containing the paths to the netCDF files where the data is stored for that variable
- dataset, which I will cover in more detail below.

### Technical Details

This is for advanced users that will need to use different datasets.
The dataset parameter is used for different recipes from ESMValTool and where the data is situated at our data disk.
So for the ERA5 data we use ``dataset='ERA5'`` which calls this dataset object:
```python
{
  "ERA5": Dataset(
          dataset="ERA5",
          project="OBS6",
          tier=3,
          type="reanaly",
          version=1,
  )
}
```

When using your own forcing, different datasets, or you need Eday data like evaporation from ERA5 you might need to check this out, it is listed [here on GitHub](https://github.com/eWaterCycle/ewatercycle/blob/main/src/ewatercycle/esmvaltool/datasets.py).
You can always as the maintainers for help.

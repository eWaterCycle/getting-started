# What is eWaterCycle

eWaterCycle provides a standardized environment (using [containerization](https://www.docker.com/resources/what-container/) (see technical details below) and Jupyter Notebooks).
The interface is a [Python notebook](https://www.ewatercycle.org/getting-started/main/some_content/first_model_run/interface.html) on a jupyterHub, run on a supercomputer (currently SRC).
Making sure that the user's laptop does not do any heavy computations.

We support running multiple hydrological models in a reproducible way.
Models include:
- HBV
- PCRGlobWB
- Wflow
- LISflood
- Marmot

The coupling of models paired with our seamless integration of data sources, visualization, and advanced workflows allow users to:
- Run and couple different hydrological models.
- Access and preprocess input data seamlessly.
- Reproduce results and share workflows across institutions.
- Follow FAIR data principles, enhancing trust and transparency.

The platform is designed with researchers in mind, enabling both simple experiments and complex coupled simulations.

## More Technical Details

eWaterCycle uses object-oriented programming, meaning that the forcing data and models are objects.
Because these objects contain the same general functions it lets us easily switch between the forcing/model objects.
These general functions are part of the Basic Model Interface (BMI) philosophy.

For containerization, we use docker to develop the containers and apptainer[^why] to deploy all the models on the eWaterCycle platform.
This ensures that the models, that are written in different programming languages, all work because we know what functions they have, because of BMI.
Now we only need to communicate to these containers from our jupyter notebook:
We use: grpc4bmi; a 'translator' for BMI function calls between different programming languages and across containers. This library was build by the eWaterCycle team, but is available openly for anyone that can benefit from its functionality.

We also make use of ESMValTool, a climate data processing toolbox that originally intended to post-process climate data from CMIP projects for inclusion in IPCC reports, we adopted as tool for pre-processing climate data into forcing data for hydrological models.

[^why]: Using apptainer because docker requires root access, which we cannot have on SURF.

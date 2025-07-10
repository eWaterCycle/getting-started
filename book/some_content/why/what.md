# What is eWaterCycle

eWaterCycle provides a standardized environment (using [containerization](https://www.docker.com/resources/what-container/) and Jupyter Notebooks).
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

eWaterCycle uses object-oriented programming, meaning that the data and models are objects.

[TODO]
- grpc4bmi, a 'translator' for BMI function calls between different programming languages and across containers. This library was build by the eWaterCycle team, but is available openly for anyone that can benefit from its functionality.
- apptainer, a container engine that runs the model-containers (Docker is supported too).
- ESMValTool, a climate data processing toolbox that originally intended to post-process climate data from CMIP projects for inclusion in IPCC reports, we adopted as tool for pre-processing climate data into forcing data for hydrological models
- Numerous hydrological models that are made available as plugins to eWaterCycle, see eWaterCycle-leakybucket as an example. Note that plugins do not have to be owned and maintained by the eWaterCycle team: anyone with a model can make a plugin for eWaterCycle and make their model be available for others through the platform.


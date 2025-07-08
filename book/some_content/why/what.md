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

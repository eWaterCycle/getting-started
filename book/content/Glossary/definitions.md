# Definitions eWaterCycle

Forcing
: Input values for models that change over time.

Model
: Computational code that simulates real life scenarios

Class
: A blueprint in programming that defines the structure and behavior of objects used in models.

Parameter
: A fixed value used in a model that influences its behavior but does not change during the simulation.

Variable
: A value that can change during the simulation and is often calculated by the model.

Hydrological Model
: A type of model that simulates the movement, distribution, and quality of water within the Earth system.

Component
: A modular part of a model or workflow, such as a data source, processing step, or visualization tool.

Workflow
: A sequence of steps or processes used to run a model, including data input, simulation, and output analysis.

Calibration
: The process of adjusting model parameters to improve the match between simulated and observed data.

Validation
: The process of testing a model's accuracy using independent data not used during calibration.

Simulation
: The execution of a model over a specified time period using input forcing data and parameters.

Containers
: Lightweight, portable units that package software and its dependencies together, ensuring consistent execution across different computing environments. 
In eWaterCycle, containers are used to run models reliably and reproducibly, regardless of the underlying system.

GRPC4BMI
: Is what we use to communicate between the Jupyterhub environment and the model containers.

BMI
: Basic Model Interface — a standardized interface that defines how models expose their variables, time steps, and methods for initialization, updating, and finalization. 
It allows models to be run and controlled in a consistent way, making them easier to integrate into larger workflows like eWaterCycle.
It also ensures that every model is run in the same way.

OpenDAP
: 
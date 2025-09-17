# Different Types of Workflows

Here we will link to research applications using eWaterCycle v2.4.
These are examples of workflows, they might not work with the current version of eWaterCycle.

Here is a quick overview:

## Running a Model

### Flooding

Using CMIP6 future data together with a calibrated HBV model, Thirza van Esch did research into the flooding of the Wien River.
As part of her BSc thesis.

### Droughts

Using a calibrated HBV model with CMIP 6 future data, Ischa Hollemans looked at droughts of the Loire River.
As part of his BSc thesis.

### Climate Change

[Being worked on]

## Calibrating Models

### HBV

Here Thirza van Esch used RMSE and the Nelder-Mead optimization to calibrate her HBV model for floodings.

## Comparisons

### 1 Model, Multiple Forcings

[Being worked on]

### 1 Forcing, Multiple Models

[Being worked on]

## Model Coupling

[Being worked on]

## Data Assimilation

[Being worked on]

```mermaid
graph TB
    A[Working with eWatercycle] --> B(Beginner)
    A --> F{Choosing your Workflow 
    Choose Model and accompanying Forcing}
    
    B --> |Understand why we use eWaterCycle|C(<a href='https://www.ewatercycle.org/getting-started/main/some_content/first_model_run.html'>Hello World example</a>)
    
 
    C --> D[(<a href='https://www.ewatercycle.org/getting-started/main/some_content/generate_forcing.html'>Learn different forcings</a>)]
    C --> E[<a href='https://www.ewatercycle.org/getting-started/main/some_content/different_models.html'>Learn about different models</a>] 

    D --> F
    E --> F

    F --> G(Future Studies)
        G --> N(Climate Change)
            N --> O
        G --> L(Flooding)
        G --> M(Droughts)
            L --> AA[[No Calibration Needed]] 
            AA --> O[(Get Relevant CMIP Forcing)]
            L --> BB[[Calibration Needed?]] 
            BB -->  H 
            M --> AA
            
            M --> BB 
            O --> P(Analyse Results)
        
        

    F --> H(Model Calibration)
    
        H --> Q(HBV)
        Q -. Flood/Drought .-> O
    
    F --> I(Comparisons)
        I --> R(1 Model, Multiple Forcings) --> T
        I --> S(1 Forcing, Multiple Models) --> T
    
    F --> J(Model Coupling)
        J --> T(Work In Progress)
    
    F --> K(Data Assimilation)
        K --> T

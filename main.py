import streamlit as st
import pandas as pd

def goal_table(time, goals, width,):
    
    st.write(time)
    
    dt = pd.DataFrame( {
            "Goal Name": [
                goals
            ],
            "Status": [
            False,
            False,
            False,
            ]
        }
    )
    st.data_editor(
        dt,
        width=width,
        column_config={
            "Status": st.column_config.CheckboxColumn(
                "Goal Status",
                help="select wich goal is **ended**",
                default=False,
        ),
            "Goal Name": st.column_config.Column(
                width="large"
            )},
        disabled=["Goal Name"],
        hide_index=True,
    )

goal_table("Years", "asd", 800)
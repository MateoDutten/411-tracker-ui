import streamlit as st
import pandas as pd

def goal_table(time, goals, goal_status, width,):
    
    st.write(time)
    
    dt = pd.DataFrame( {
            "Goal Name": [
                goals
            ],
            "Status": [
                goal_status
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
                width="small",
                default=False,
        ),
            "Goal Name": st.column_config.Column(
                width="large"
            )},
        disabled=["Goal Name"],
        hide_index=True,
    )

goal_table("Years", "asd", False ,800,)

goal_table("Months", "asd", False ,600,)

goal_table("Weeks", "asdsd", False ,500,)
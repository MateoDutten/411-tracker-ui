import streamlit as st
import pandas as pd
import requests


def get_data(index, type):
    _url = "http://localhost:8000/goal"
    r = requests.get(url=_url)
    data = r.json()
    goal = data[index][type]
    return goal


data_goal_year = get_data(1, "goal")


def goal_table(time, goals, goal_status, width):
    st.write(time)

    dt = pd.DataFrame({
        "Goal Name": [
            goals
        ],
        "Status": [
            goal_status
        ]
    })
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


goal_table("Years", data_goal_year, False, 800, )

goal_table("Months", "asd", False, 600, )

goal_table("Weeks", "asdsd", False, 500, )

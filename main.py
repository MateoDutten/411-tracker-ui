import streamlit as st
import pandas as pd
import requests

TABLE_TYPES = [{"timeframe": "year"}, {"timeframe": "month"}, {"timeframe": "week"}]


def get_data(params):
    _url = "http://localhost:8000/goal"
    r = requests.get(url=_url, params=params)
    return r.json()


def goal_table(_type, goals, key):
    st.write(_type["timeframe"])
    st.data_editor(
        pd.DataFrame(goals),
        width=800,
        key=key,
        column_config={
            "Status": st.column_config.CheckboxColumn(
                help="select which goal is **ended**",
                width="small",
                default=False,
            ),
            "Goal Name": st.column_config.Column(
                width="large"
            )},
        disabled=["Goal Name"],
        hide_index=True,
    )


for _type in TABLE_TYPES:
    goals_dict = get_data(_type)
    goal_table(_type, goals_dict, _type)

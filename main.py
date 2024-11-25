import streamlit as st
import pandas as pd
import requests

TABLE_TYPES = [{"timeframe": "year"}, {"timeframe": "month"}, {"timeframe": "week"}]



def get_data(params):
    _url = "http://localhost:8000/goal"
    r = requests.get(url=_url, params=params)
    return r.json()


def create_goal():
    _url = "http://localhost:8000/goal"
    data = {"name": st.session_state.goal_name,
            "timeframe": st.session_state.timeframe,
            "start_date": st.session_state.goal_start_date}
    r = requests.post(url=_url, data=data)
    return r.text


def delete_goal(goal_id):
    _url = "http://localhost:8000/goal"
    data = {"goal_id":goal_id}
    r = requests.delete(url=_url, data=data)
    return r.text


def goal_table(_type, goals, key):
    df = goals
    st.write(_type["timeframe"])
    return st.data_editor(
            df,
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


def add_goal_form():
    with st.form("add_goal_form"):
        st.write("Add Goal")
        st.text_input("Goal Name", key="goal_name")
        st.selectbox("timeframe", ("month", "week", "year"), key="timeframe")
        st.date_input("start date", key="goal_start_date")
        st.form_submit_button("Submit", on_click=create_goal)


def add_goal_button():
    if st.button("Add Goal",):
        add_goal_form()


add_goal_button()
delete = st.button(label="Delete")
for _type in TABLE_TYPES:
    goals_dict = pd.DataFrame(get_data(_type))
    goalstable = goal_table(_type, goals_dict, _type)
    if delete:
        selected = goalstable["id"].loc[goalstable.select_box]
        for i in selected:
            delete_goal(i)
            st.rerun()